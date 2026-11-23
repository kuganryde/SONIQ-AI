import os
import re
from pathlib import Path
from typing import Optional, Tuple
from fastapi import HTTPException, Request, status
from fastapi.responses import StreamingResponse

RANGE_REGEX = re.compile(r"bytes=(\d*)-(\d*)")


def get_range_params(range_header: str, file_size: int) -> Tuple[int, int]:
    """Parses HTTP Range header according to RFC 7233."""
    match = RANGE_REGEX.match(range_header)
    if not match:
        return 0, file_size - 1

    start_str, end_str = match.groups()
    if start_str and end_str:
        start = int(start_str)
        end = int(end_str)
    elif start_str:
        start = int(start_str)
        end = file_size - 1
    elif end_str:
        start = max(0, file_size - int(end_str))
        end = file_size - 1
    else:
        start = 0
        end = file_size - 1

    start = max(0, min(start, file_size - 1))
    end = max(start, min(end, file_size - 1))
    return start, end


async def send_file_range(
    file_path: Path | str,
    request: Request,
    content_type: str = "video/mp4",
    chunk_size: int = 1024 * 512
) -> StreamingResponse:
    """Streams binary media files with HTTP Range (206 Partial Content) support."""
    path = Path(file_path)
    if not path.exists():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="File not found")

    file_size = path.stat().st_size
    range_header = request.headers.get("Range")

    if range_header:
        start, end = get_range_params(range_header, file_size)
        content_length = end - start + 1

        async def range_streamer():
            with open(path, "rb") as f:
                f.seek(start)
                bytes_left = content_length
                while bytes_left > 0:
                    read_len = min(chunk_size, bytes_left)
                    data = f.read(read_len)
                    if not data:
                        break
                    bytes_left -= len(data)
                    yield data

        headers = {
            "Content-Range": f"bytes {start}-{end}/{file_size}",
            "Accept-Ranges": "bytes",
            "Content-Length": str(content_length),
            "Content-Type": content_type,
            "Cache-Control": "public, max-age=3600"
        }
        return StreamingResponse(range_streamer(), status_code=status.HTTP_206_PARTIAL_CONTENT, headers=headers)
    else:
        async def full_streamer():
            with open(path, "rb") as f:
                while chunk := f.read(chunk_size):
                    yield chunk

        headers = {
            "Accept-Ranges": "bytes",
            "Content-Length": str(file_size),
            "Content-Type": content_type,
            "Cache-Control": "public, max-age=3600"
        }
        return StreamingResponse(full_streamer(), status_code=status.HTTP_200_OK, headers=headers)
