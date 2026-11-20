import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeSpatialRoom({
  layout = '5.1',
  pos = { x: 0.0, y: 0.4, z: 0.0 },
  onChangePos,
  speakerGains = {},
  isBinaural = false
}) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const orbRef = useRef(null);
  const dropLineRef = useRef(null);
  const beamLinesRef = useRef([]);
  const speakerMeshesRef = useRef([]);
  const isDraggingRef = useRef(false);
  const isOrbitingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const cameraAngleRef = useRef({ theta: Math.PI / 4, phi: Math.PI / 4, radius: 8.5 });

  // Speaker coordinates in 3D Studio Space (Three.js coords: X=right, Y=up, Z=towards viewer/rear)
  // Our studio layout coords: x (-1 to +1, right), y (-1 to +1, front), z (-1 to +1, up)
  // Mapping to Three.js: threeX = x * 3.0, threeY = z * 2.0 + 1.2, threeZ = -y * 3.0
  const speakerLayoutConfigs = {
    '2.0': [
      { id: 'L', name: 'Left', x: -1.0, y: 1.0, z: 0.0 },
      { id: 'R', name: 'Right', x: 1.0, y: 1.0, z: 0.0 },
    ],
    '2.1': [
      { id: 'L', name: 'Left', x: -1.0, y: 1.0, z: 0.0 },
      { id: 'R', name: 'Right', x: 1.0, y: 1.0, z: 0.0 },
      { id: 'LFE', name: 'Subwoofer', x: 0.0, y: 0.2, z: -0.6, isLfe: true },
    ],
    '5.1': [
      { id: 'L', name: 'Front Left', x: -0.9, y: 0.8, z: 0.0 },
      { id: 'C', name: 'Center', x: 0.0, y: 1.0, z: 0.0 },
      { id: 'R', name: 'Front Right', x: 0.9, y: 0.8, z: 0.0 },
      { id: 'LFE', name: 'Subwoofer', x: 0.0, y: 0.1, z: -0.6, isLfe: true },
      { id: 'Ls', name: 'Surround L', x: -0.95, y: -0.7, z: 0.0 },
      { id: 'Rs', name: 'Surround R', x: 0.95, y: -0.7, z: 0.0 },
    ],
    '7.1': [
      { id: 'L', name: 'Front Left', x: -0.9, y: 0.8, z: 0.0 },
      { id: 'C', name: 'Center', x: 0.0, y: 1.0, z: 0.0 },
      { id: 'R', name: 'Front Right', x: 0.9, y: 0.8, z: 0.0 },
      { id: 'LFE', name: 'Subwoofer', x: 0.0, y: 0.1, z: -0.6, isLfe: true },
      { id: 'Ls', name: 'Side Surr L', x: -1.0, y: 0.0, z: 0.0 },
      { id: 'Rs', name: 'Side Surr R', x: 1.0, y: 0.0, z: 0.0 },
      { id: 'Rls', name: 'Rear Surr L', x: -0.75, y: -0.9, z: 0.0 },
      { id: 'Rrs', name: 'Rear Surr R', x: 0.75, y: -0.9, z: 0.0 },
    ],
    '7.1.4': [
      { id: 'L', name: 'Front Left', x: -0.9, y: 0.8, z: 0.0 },
      { id: 'C', name: 'Center', x: 0.0, y: 1.0, z: 0.0 },
      { id: 'R', name: 'Front Right', x: 0.9, y: 0.8, z: 0.0 },
      { id: 'LFE', name: 'Subwoofer', x: 0.0, y: 0.1, z: -0.6, isLfe: true },
      { id: 'Ls', name: 'Side Surr L', x: -1.0, y: 0.0, z: 0.0 },
      { id: 'Rs', name: 'Side Surr R', x: 1.0, y: 0.0, z: 0.0 },
      { id: 'Rls', name: 'Rear Surr L', x: -0.75, y: -0.9, z: 0.0 },
      { id: 'Rrs', name: 'Rear Surr R', x: 0.75, y: -0.9, z: 0.0 },
      { id: 'TFL', name: 'Top Front L', x: -0.75, y: 0.6, z: 0.95, isHeight: true },
      { id: 'TFR', name: 'Top Front R', x: 0.75, y: 0.6, z: 0.95, isHeight: true },
      { id: 'TRL', name: 'Top Rear L', x: -0.75, y: -0.6, z: 0.95, isHeight: true },
      { id: 'TRR', name: 'Top Rear R', x: 0.75, y: -0.6, z: 0.95, isHeight: true },
    ]
  };

  const currentSpeakers = speakerLayoutConfigs[layout] || speakerLayoutConfigs['5.1'];

  // Initialize Three.js Scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 700;
    const height = container.clientHeight || 480;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06080e);
    scene.fog = new THREE.FogExp2(0x06080e, 0.04);
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    cameraRef.current = camera;
    updateCameraPosition();

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x00f2fe, 1.2);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const purpleSpot = new THREE.PointLight(0xa855f7, 2.0, 15);
    purpleSpot.position.set(-4, 5, -4);
    scene.add(purpleSpot);

    // 5. Studio Floor Grid
    const gridHelper = new THREE.GridHelper(10, 20, 0x00f2fe, 0x1e293b);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // Polar Circle on floor for listening area
    const ringGeo = new THREE.RingGeometry(2.95, 3.05, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe, side: THREE.DoubleSide, transparent: true, opacity: 0.35 });
    const floorRing = new THREE.Mesh(ringGeo, ringMat);
    floorRing.rotation.x = Math.PI / 2;
    scene.add(floorRing);

    // 6. Engineer Sweet Spot (Center Seat / Head)
    const headGeo = new THREE.SphereGeometry(0.28, 24, 24);
    const headMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4, metalness: 0.8 });
    const engineerHead = new THREE.Mesh(headGeo, headMat);
    engineerHead.position.set(0, 1.1, 0);
    scene.add(engineerHead);

    // Headphone band around listener
    const hpGeo = new THREE.TorusGeometry(0.3, 0.04, 16, 32, Math.PI);
    const hpMat = new THREE.MeshStandardMaterial({ color: 0x00f2fe, metalness: 0.9, roughness: 0.1 });
    const headphones = new THREE.Mesh(hpGeo, hpMat);
    headphones.rotation.x = Math.PI / 2;
    headphones.position.set(0, 1.15, 0);
    scene.add(headphones);

    // 7. Draggable 3D Sound Source Orb
    const orbGeo = new THREE.SphereGeometry(0.25, 32, 32);
    const orbMat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.5
    });
    const orb = new THREE.Mesh(orbGeo, orbMat);
    scene.add(orb);
    orbRef.current = orb;

    // Glowing Wireframe Aura on Orb
    const auraGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const auraMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const aura = new THREE.Mesh(auraGeo, auraMat);
    orb.add(aura);

    // Drop line from orb to floor to visually indicate height Z
    const lineMat = new THREE.LineDashedMaterial({ color: 0x00f2fe, dashSize: 0.1, gapSize: 0.05 });
    const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0)]);
    const dropLine = new THREE.Line(lineGeo, lineMat);
    dropLine.computeLineDistances();
    scene.add(dropLine);
    dropLineRef.current = dropLine;

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Pulse orb aura
      aura.rotation.y = elapsed * 0.8;
      aura.rotation.x = elapsed * 0.5;
      const pulseScale = 1.0 + Math.sin(elapsed * 4.0) * 0.08;
      aura.scale.set(pulseScale, pulseScale, pulseScale);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, []);

  // Update Camera Orbit Position
  const updateCameraPosition = () => {
    if (!cameraRef.current) return;
    const { theta, phi, radius } = cameraAngleRef.current;
    cameraRef.current.position.x = radius * Math.sin(phi) * Math.sin(theta);
    cameraRef.current.position.y = radius * Math.cos(phi);
    cameraRef.current.position.z = radius * Math.sin(phi) * Math.cos(theta);
    cameraRef.current.lookAt(0, 1.0, 0);
  };

  // Re-build 3D Speakers whenever Layout changes
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Remove old speakers and beam lines
    speakerMeshesRef.current.forEach(m => scene.remove(m));
    speakerMeshesRef.current = [];

    beamLinesRef.current.forEach(b => scene.remove(b));
    beamLinesRef.current = [];

    // Create new speakers for layout
    currentSpeakers.forEach((spk) => {
      const group = new THREE.Group();

      const threeX = spk.x * 2.8;
      const threeY = spk.z * 1.8 + 1.2;
      const threeZ = -spk.y * 2.8;

      group.position.set(threeX, threeY, threeZ);

      // Cabinet box
      let boxColor = spk.isLfe ? 0xd97706 : spk.isHeight ? 0x9333ea : 0x0284c7;
      const cabGeo = new THREE.BoxGeometry(0.35, 0.45, 0.3);
      const cabMat = new THREE.MeshStandardMaterial({
        color: boxColor,
        roughness: 0.3,
        metalness: 0.7
      });
      const cabinet = new THREE.Mesh(cabGeo, cabMat);
      group.add(cabinet);

      // Woofer cone on front
      const coneGeo = new THREE.ConeGeometry(0.12, 0.08, 16);
      const coneMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.9 });
      const cone = new THREE.Mesh(coneGeo, coneMat);
      cone.rotation.x = Math.PI / 2;
      cone.position.z = 0.14;
      group.add(cone);

      // Glowing radiation ring around speaker
      const ringGeo = new THREE.RingGeometry(0.18, 0.22, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: spk.isLfe ? 0xf59e0b : spk.isHeight ? 0xc084fc : 0x38bdf8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
      });
      const radiationRing = new THREE.Mesh(ringGeo, ringMat);
      radiationRing.position.z = 0.16;
      group.add(radiationRing);

      // Face towards center sweet spot (0, 1.1, 0)
      group.lookAt(0, 1.1, 0);

      scene.add(group);
      speakerMeshesRef.current.push(group);

      // Radiation beam connecting sound source to speaker
      const beamGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(threeX, threeY, threeZ)
      ]);
      const beamMat = new THREE.LineBasicMaterial({
        color: boxColor,
        transparent: true,
        opacity: 0.25
      });
      const beam = new THREE.Line(beamGeo, beamMat);
      scene.add(beam);
      beamLinesRef.current.push({ beam, spk, targetPos: new THREE.Vector3(threeX, threeY, threeZ) });
    });
  }, [layout]);

  // Update Orb & Beams Position whenever `pos` changes
  useEffect(() => {
    const orb = orbRef.current;
    const dropLine = dropLineRef.current;
    if (!orb || !dropLine) return;

    const threeX = pos.x * 2.8;
    const threeY = pos.z * 1.8 + 1.2;
    const threeZ = -pos.y * 2.8;

    orb.position.set(threeX, threeY, threeZ);

    // Update drop line (from floor y=0 to orb y)
    dropLine.geometry.dispose();
    dropLine.geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(threeX, 0, threeZ),
      new THREE.Vector3(threeX, threeY, threeZ)
    ]);
    dropLine.computeLineDistances();

    // Update beam lines from orb to each speaker
    beamLinesRef.current.forEach(({ beam, targetPos }) => {
      beam.geometry.dispose();
      beam.geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(threeX, threeY, threeZ),
        targetPos
      ]);
    });
  }, [pos]);

  // Mouse Interaction: Left Click Drag = Orbit Camera; Right Click / Shift Drag = Pan Sound Orb
  const handleMouseDown = (e) => {
    if (e.button === 0 && !e.shiftKey) {
      isOrbitingRef.current = true;
    } else {
      isDraggingRef.current = true;
    }
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    const deltaX = e.clientX - previousMousePositionRef.current.x;
    const deltaY = e.clientY - previousMousePositionRef.current.y;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };

    if (isOrbitingRef.current) {
      cameraAngleRef.current.theta -= deltaX * 0.008;
      cameraAngleRef.current.phi = Math.max(0.15, Math.min(Math.PI / 2 - 0.05, cameraAngleRef.current.phi - deltaY * 0.008));
      updateCameraPosition();
    } else if (isDraggingRef.current) {
      // Drag sound orb in X and Y
      const newX = Math.max(-1.0, Math.min(1.0, pos.x + deltaX * 0.005));
      const newY = Math.max(-1.0, Math.min(1.0, pos.y - deltaY * 0.005));
      onChangePos({ ...pos, x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    isOrbitingRef.current = false;
    isDraggingRef.current = false;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cameraAngleRef.current.radius = Math.max(4.0, Math.min(15.0, cameraAngleRef.current.radius + e.deltaY * 0.01));
    updateCameraPosition();
  };

  const setCameraPreset = (preset) => {
    if (preset === 'iso') {
      cameraAngleRef.current = { theta: Math.PI / 4, phi: Math.PI / 3.5, radius: 8.5 };
    } else if (preset === 'top') {
      cameraAngleRef.current = { theta: 0, phi: 0.15, radius: 9.0 };
    } else if (preset === 'sweetspot') {
      cameraAngleRef.current = { theta: 0, phi: Math.PI / 2.2, radius: 4.5 };
    }
    updateCameraPosition();
  };

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-slate-800 bg-[#06080e] shadow-2xl select-none">
      
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Top HUD: Spatial Coordinates & Binaural Status */}
      <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none text-xs font-mono">
        <div className="flex items-center space-x-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-white font-bold">{layout} Room View</span>
          <span className="text-slate-400">•</span>
          <span className="text-cyan-300">X: {pos.x.toFixed(2)}</span>
          <span className="text-emerald-300">Y: {pos.y.toFixed(2)}</span>
          <span className="text-purple-300">Z: {pos.z.toFixed(2)}</span>
        </div>

        {isBinaural && (
          <div className="flex items-center space-x-1.5 bg-purple-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-500/60 text-purple-200">
            <span className="text-sm">🎧</span>
            <span className="font-bold">Binaural HRTF Headphone Virtualization Active</span>
          </div>
        )}
      </div>

      {/* Camera View Switcher Buttons */}
      <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black/70 backdrop-blur-md p-1.5 rounded-xl border border-slate-800 text-[10px] font-mono">
        <span className="text-slate-400 px-1">Camera:</span>
        <button
          onClick={() => setCameraPreset('iso')}
          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200"
        >
          3D Perspective
        </button>
        <button
          onClick={() => setCameraPreset('top')}
          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200"
        >
          Top Down
        </button>
        <button
          onClick={() => setCameraPreset('sweetspot')}
          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200"
        >
          Sweet Spot
        </button>
      </div>

      {/* Mouse Navigation Hints */}
      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800 text-[9px] font-mono text-slate-400 pointer-events-none">
        Click + Drag: Orbit 3D Room • Shift + Drag: Pan Sound Orb • Scroll: Zoom
      </div>

    </div>
  );
}
