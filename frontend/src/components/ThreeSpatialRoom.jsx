import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Generates crisp 3D Canvas text badge for speaker identification
function makeTextSprite(id, name, isLfe = false, isHeight = false) {
  const canvas = document.createElement('canvas');
  canvas.width = 160;
  canvas.height = 70;
  const ctx = canvas.getContext('2d');

  const bgGradient = isLfe ? '#78350f' : isHeight ? '#581c87' : '#0369a1';
  const borderCol = isLfe ? '#f59e0b' : isHeight ? '#c084fc' : '#38bdf8';

  ctx.fillStyle = bgGradient;
  if (ctx.roundRect) {
    ctx.roundRect(4, 6, 152, 58, 10);
  } else {
    ctx.rect(4, 6, 152, 58);
  }
  ctx.fill();

  ctx.lineWidth = 3;
  ctx.strokeStyle = borderCol;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 26px monospace';
  ctx.textAlign = 'center';
  ctx.fillText(id, 80, 32);

  ctx.fillStyle = borderCol;
  ctx.font = '14px monospace';
  ctx.fillText(name.slice(0, 14), 80, 52);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(0.7, 0.32, 1.0);
  return sprite;
}

export default function ThreeSpatialRoom({
  layout = '5.1',
  pos = { x: 0.0, y: 0.4, z: 0.0 },
  onChangePos,
  speakerGains = {},
  isBinaural = false,
  upliftActive = false,
  upliftType = 'Cinema Upmix',
  upliftTelemetry = null,
  isAuditioning = false,
  onToggleAudition = null
}) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const orbRef = useRef(null);
  const dropLineRef = useRef(null);
  const beamLinesRef = useRef([]);
  const speakerGroupsRef = useRef([]);
  const upliftVisualsRef = useRef(null);
  const isDraggingRef = useRef(false);
  const isOrbitingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const cameraAngleRef = useRef({ theta: Math.PI / 4, phi: Math.PI / 3.8, radius: 8.5 });

  // Real-time animated VU meter readings state for HUD
  const [liveMeterReadings, setLiveMeterReadings] = useState({});

  // Speaker coordinates in 3D Studio Space (X=right, Y=up, Z=towards rear)
  const speakerLayoutConfigs = {
    '2.0': [
      { id: 'L', name: 'Left', x: -1.0, y: 1.0, z: 0.0 },
      { id: 'R', name: 'Right', x: 1.0, y: 1.0, z: 0.0 },
    ],
    '2.1': [
      { id: 'L', name: 'Left', x: -1.0, y: 1.0, z: 0.0 },
      { id: 'R', name: 'Right', x: 1.0, y: 1.0, z: 0.0 },
      { id: 'LFE', name: 'Subwoofer', x: 0.0, y: 0.25, z: -0.6, isLfe: true },
    ],
    '5.1': [
      { id: 'L', name: 'Front Left', x: -0.95, y: 0.85, z: 0.0 },
      { id: 'C', name: 'Center', x: 0.0, y: 1.0, z: 0.0 },
      { id: 'R', name: 'Front Right', x: 0.95, y: 0.85, z: 0.0 },
      { id: 'LFE', name: 'Subwoofer', x: 0.0, y: 0.25, z: -0.6, isLfe: true },
      { id: 'Ls', name: 'Surround L', x: -1.0, y: -0.7, z: 0.0 },
      { id: 'Rs', name: 'Surround R', x: 1.0, y: -0.7, z: 0.0 },
    ],
    '7.1': [
      { id: 'L', name: 'Front Left', x: -0.95, y: 0.85, z: 0.0 },
      { id: 'C', name: 'Center', x: 0.0, y: 1.0, z: 0.0 },
      { id: 'R', name: 'Front Right', x: 0.95, y: 0.85, z: 0.0 },
      { id: 'LFE', name: 'Subwoofer', x: 0.0, y: 0.25, z: -0.6, isLfe: true },
      { id: 'Ls', name: 'Side Surr L', x: -1.05, y: 0.0, z: 0.0 },
      { id: 'Rs', name: 'Side Surr R', x: 1.05, y: 0.0, z: 0.0 },
      { id: 'Rls', name: 'Rear Surr L', x: -0.75, y: -0.9, z: 0.0 },
      { id: 'Rrs', name: 'Rear Surr R', x: 0.75, y: -0.9, z: 0.0 },
    ],
    '7.1.4': [
      { id: 'L', name: 'Front Left', x: -0.95, y: 0.85, z: 0.0 },
      { id: 'C', name: 'Center', x: 0.0, y: 1.0, z: 0.0 },
      { id: 'R', name: 'Front Right', x: 0.95, y: 0.85, z: 0.0 },
      { id: 'LFE', name: 'Subwoofer', x: 0.0, y: 0.25, z: -0.6, isLfe: true },
      { id: 'Ls', name: 'Side Surr L', x: -1.05, y: 0.0, z: 0.0 },
      { id: 'Rs', name: 'Side Surr R', x: 1.05, y: 0.0, z: 0.0 },
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

    const width = container.clientWidth || 750;
    const height = container.clientHeight || 520;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06080e);
    scene.fog = new THREE.FogExp2(0x06080e, 0.035);
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x00f2fe, 1.3);
    dirLight.position.set(6, 12, 8);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const purpleSpot = new THREE.PointLight(0xa855f7, 2.2, 18);
    purpleSpot.position.set(-5, 6, -5);
    scene.add(purpleSpot);

    const warmLfeLight = new THREE.PointLight(0xf59e0b, 1.8, 10);
    warmLfeLight.position.set(0, 0.5, 0);
    scene.add(warmLfeLight);

    // 5. Studio Floor Grid
    const gridHelper = new THREE.GridHelper(10, 20, 0x00f2fe, 0x1e293b);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // Circular Listening Arena rings
    const ringGeo = new THREE.RingGeometry(2.9, 3.0, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
    const floorRing = new THREE.Mesh(ringGeo, ringMat);
    floorRing.rotation.x = Math.PI / 2;
    scene.add(floorRing);

    const innerRingGeo = new THREE.RingGeometry(1.4, 1.45, 48);
    const innerRingMat = new THREE.MeshBasicMaterial({ color: 0xa855f7, side: THREE.DoubleSide, transparent: true, opacity: 0.25 });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.rotation.x = Math.PI / 2;
    scene.add(innerRing);

    // 6. Engineer Sweet Spot (Center Seat / Head)
    const headGeo = new THREE.SphereGeometry(0.28, 24, 24);
    const headMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.35, metalness: 0.85 });
    const engineerHead = new THREE.Mesh(headGeo, headMat);
    engineerHead.position.set(0, 1.1, 0);
    scene.add(engineerHead);

    const hpGeo = new THREE.TorusGeometry(0.3, 0.045, 16, 32, Math.PI);
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
      emissiveIntensity: 0.85,
      roughness: 0.1,
      metalness: 0.5
    });
    const orb = new THREE.Mesh(orbGeo, orbMat);
    scene.add(orb);
    orbRef.current = orb;

    const auraGeo = new THREE.SphereGeometry(0.36, 16, 16);
    const auraMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });
    const aura = new THREE.Mesh(auraGeo, auraMat);
    orb.add(aura);

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

    // 60 FPS Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Pulse main sound orb
      aura.rotation.y = elapsed * 0.85;
      aura.rotation.x = elapsed * 0.5;
      const pulse = 1.0 + Math.sin(elapsed * 4.5) * 0.08;
      aura.scale.set(pulse, pulse, pulse);

      // Animate Speaker Wavefront Ripples & 3D LED VU Meters
      speakerGroupsRef.current.forEach((spkObj) => {
        const { id, isLfe, rippleRing, rippleMat, vuSegments, coneMesh } = spkObj;
        
        // Compute gain level: prioritize telemetry from backend upmix or distance calculation
        let gain = 0.5;
        if (speakerGains && speakerGains[id] !== undefined) {
          gain = typeof speakerGains[id] === 'number' ? speakerGains[id] : (speakerGains[id].gain_norm || 0.5);
        }

        // Add natural audio micro-fluctuation if auditioning
        if (isAuditioning) {
          gain = Math.max(0.08, Math.min(1.0, gain + Math.sin(elapsed * 12.0 + spkObj.seed) * 0.12));
        }

        // 1. Expand and fade sound ripple wavefront
        if (rippleRing && rippleMat) {
          const wavePhase = (elapsed * 2.0 + spkObj.seed) % 1.0;
          const waveScale = 1.0 + wavePhase * (isLfe ? 2.5 : 1.8) * gain;
          rippleRing.scale.set(waveScale, waveScale, 1.0);
          rippleMat.opacity = Math.max(0.0, (1.0 - wavePhase) * (gain * 0.85));
        }

        // 2. Pulse speaker cone scale with energy
        if (coneMesh) {
          const conePulse = 1.0 + Math.sin(elapsed * 20.0 + spkObj.seed) * 0.05 * gain;
          coneMesh.scale.set(conePulse, 1.0, conePulse);
        }

        // 3. Illuminate 3D Segmented LED VU Meter bars (8 segments)
        if (vuSegments && vuSegments.length > 0) {
          const activeSegmentCount = Math.round(gain * vuSegments.length);
          vuSegments.forEach((seg, idx) => {
            const isLit = idx < activeSegmentCount;
            seg.material.emissiveIntensity = isLit ? (idx >= 7 ? 1.5 : 1.1) : 0.08;
            seg.material.opacity = isLit ? 1.0 : 0.25;
          });
        }
      });

      // Animate Uplift Panning Visualization Orbs (if active)
      if (upliftVisualsRef.current) {
        upliftVisualsRef.current.rotation.y = elapsed * 0.15;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, []);

  const updateCameraPosition = () => {
    if (!cameraRef.current) return;
    const { theta, phi, radius } = cameraAngleRef.current;
    cameraRef.current.position.x = radius * Math.sin(phi) * Math.sin(theta);
    cameraRef.current.position.y = radius * Math.cos(phi);
    cameraRef.current.position.z = radius * Math.sin(phi) * Math.cos(theta);
    cameraRef.current.lookAt(0, 1.0, 0);
  };

  // Re-build 3D Speakers & 3D VU Meters whenever Layout changes
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Clean old objects
    speakerGroupsRef.current.forEach(s => scene.remove(s.group));
    speakerGroupsRef.current = [];

    beamLinesRef.current.forEach(b => scene.remove(b.beam));
    beamLinesRef.current = [];

    if (upliftVisualsRef.current) {
      scene.remove(upliftVisualsRef.current);
      upliftVisualsRef.current = null;
    }

    // Build speakers for active layout (2.1, 5.1, 7.1, 7.1.4)
    currentSpeakers.forEach((spk, idx) => {
      const group = new THREE.Group();

      const threeX = spk.x * 2.8;
      const threeY = spk.z * 1.8 + (spk.isLfe ? 0.35 : 1.2);
      const threeZ = -spk.y * 2.8;

      group.position.set(threeX, threeY, threeZ);

      // Cabinet box
      let boxColor = spk.isLfe ? 0x92400e : spk.isHeight ? 0x7e22ce : 0x0369a1;
      const cabWidth = spk.isLfe ? 0.5 : 0.38;
      const cabHeight = spk.isLfe ? 0.45 : 0.52;
      const cabDepth = spk.isLfe ? 0.45 : 0.32;

      const cabGeo = new THREE.BoxGeometry(cabWidth, cabHeight, cabDepth);
      const cabMat = new THREE.MeshStandardMaterial({
        color: boxColor,
        roughness: 0.25,
        metalness: 0.75
      });
      const cabinet = new THREE.Mesh(cabGeo, cabMat);
      group.add(cabinet);

      // Speaker Woofer Cone
      const coneRadius = spk.isLfe ? 0.2 : 0.14;
      const coneGeo = new THREE.ConeGeometry(coneRadius, 0.08, 20);
      const coneMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        roughness: 0.8,
        emissive: spk.isLfe ? 0xf59e0b : 0x00f2fe,
        emissiveIntensity: 0.15
      });
      const coneMesh = new THREE.Mesh(coneGeo, coneMat);
      coneMesh.rotation.x = Math.PI / 2;
      coneMesh.position.z = cabDepth / 2 + 0.02;
      group.add(coneMesh);

      // Glowing radiation ring at cone mouth
      const ringGeo = new THREE.RingGeometry(coneRadius * 0.9, coneRadius * 1.15, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: spk.isLfe ? 0xf59e0b : spk.isHeight ? 0xc084fc : 0x38bdf8,
        side: THREE.DoubleSide
      });
      const mouthRing = new THREE.Mesh(ringGeo, ringMat);
      mouthRing.position.z = cabDepth / 2 + 0.04;
      group.add(mouthRing);

      // Acoustic Wavefront Ripple Ring (Sound Indicator)
      const rippleGeo = new THREE.RingGeometry(coneRadius * 1.05, coneRadius * 1.25, 28);
      const rippleMat = new THREE.MeshBasicMaterial({
        color: spk.isLfe ? 0xf59e0b : spk.isHeight ? 0xd8b4fe : 0x67e8f9,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
      });
      const rippleRing = new THREE.Mesh(rippleGeo, rippleMat);
      rippleRing.position.z = cabDepth / 2 + 0.06;
      group.add(rippleRing);

      // 3D Text Badge Sprite floating above speaker
      const sprite = makeTextSprite(spk.id, spk.name, spk.isLfe, spk.isHeight);
      sprite.position.set(0, cabHeight / 2 + 0.28, 0);
      group.add(sprite);

      // 3D Vertical Segmented LED VU Meter Column (8 segments beside cabinet)
      const vuSegments = [];
      const meterGroup = new THREE.Group();
      meterGroup.position.set(cabWidth / 2 + 0.07, -cabHeight / 2 + 0.05, cabDepth / 4);

      const segmentGeo = new THREE.BoxGeometry(0.045, 0.045, 0.045);
      for (let s = 0; s < 8; s++) {
        // Color: segments 0-4 green, 5-6 amber, 7 red
        const segColor = s < 5 ? 0x10b981 : s < 7 ? 0xf59e0b : 0xef4444;
        const segMat = new THREE.MeshStandardMaterial({
          color: segColor,
          emissive: segColor,
          emissiveIntensity: 0.1,
          transparent: true,
          opacity: 0.3
        });
        const segMesh = new THREE.Mesh(segmentGeo, segMat);
        segMesh.position.y = s * 0.055;
        meterGroup.add(segMesh);
        vuSegments.push(segMesh);
      }
      group.add(meterGroup);

      // Face toward center listener sweet spot (0, 1.1, 0)
      group.lookAt(0, 1.1, 0);

      scene.add(group);
      speakerGroupsRef.current.push({
        id: spk.id,
        spk,
        group,
        rippleRing,
        rippleMat,
        vuSegments,
        coneMesh,
        seed: idx * 1.37
      });

      // Acoustic radiation beam from source to speaker
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
      beamLinesRef.current.push({ beam, targetPos: new THREE.Vector3(threeX, threeY, threeZ) });
    });

    // Post-Uplift Spatial Panning Visualization
    if (upliftActive) {
      const upliftGroup = new THREE.Group();

      // 1. Center Dialogue / Voice Anchor Orb (Front Center)
      const centerGeo = new THREE.SphereGeometry(0.22, 24, 24);
      const centerMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.9,
        roughness: 0.2
      });
      const centerOrb = new THREE.Mesh(centerGeo, centerMat);
      centerOrb.position.set(0.0, 1.15, -2.6);
      upliftGroup.add(centerOrb);

      // 2. Subwoofer LFE Deep Bass Sphere (Sub floor pulse)
      const lfeGeo = new THREE.SphereGeometry(0.32, 24, 24);
      const lfeMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        emissiveIntensity: 0.8,
        roughness: 0.3
      });
      const lfeOrb = new THREE.Mesh(lfeGeo, lfeMat);
      lfeOrb.position.set(0.0, 0.3, 0.0);
      upliftGroup.add(lfeOrb);

      // 3. Surround Ambience Envelopment Halo (Rings surrounding listener)
      const haloGeo = new THREE.TorusGeometry(2.8, 0.03, 16, 64);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0xa855f7,
        transparent: true,
        opacity: 0.45
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.rotation.x = Math.PI / 2;
      halo.position.set(0, 1.2, 0);
      upliftGroup.add(halo);

      scene.add(upliftGroup);
      upliftVisualsRef.current = upliftGroup;
    }
  }, [layout, upliftActive]);

  // Update Orb & Beams Position when `pos` changes
  useEffect(() => {
    const orb = orbRef.current;
    const dropLine = dropLineRef.current;
    if (!orb || !dropLine) return;

    const threeX = pos.x * 2.8;
    const threeY = pos.z * 1.8 + 1.2;
    const threeZ = -pos.y * 2.8;

    orb.position.set(threeX, threeY, threeZ);

    dropLine.geometry.dispose();
    dropLine.geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(threeX, 0, threeZ),
      new THREE.Vector3(threeX, threeY, threeZ)
    ]);
    dropLine.computeLineDistances();

    beamLinesRef.current.forEach(({ beam, targetPos }) => {
      beam.geometry.dispose();
      beam.geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(threeX, threeY, threeZ),
        targetPos
      ]);
    });
  }, [pos]);

  // Mouse Interaction: Left Drag = Orbit 3D Room, Shift/Right Drag = Pan Orb
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
    } else if (isDraggingRef.current && onChangePos) {
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
    cameraAngleRef.current.radius = Math.max(3.8, Math.min(15.0, cameraAngleRef.current.radius + e.deltaY * 0.01));
    updateCameraPosition();
  };

  const setCameraPreset = (preset) => {
    if (preset === 'iso') {
      cameraAngleRef.current = { theta: Math.PI / 4, phi: Math.PI / 3.8, radius: 8.5 };
    } else if (preset === 'top') {
      cameraAngleRef.current = { theta: 0, phi: 0.1, radius: 9.2 };
    } else if (preset === 'sweetspot') {
      cameraAngleRef.current = { theta: 0, phi: Math.PI / 2.2, radius: 4.2 };
    }
    updateCameraPosition();
  };

  return (
    <div className="relative w-full h-[540px] rounded-2xl overflow-hidden border border-slate-800 bg-[#06080e] shadow-2xl select-none">
      
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Top HUD: Layout, Spatial Coordinates & Uplift Status */}
      <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none text-xs font-mono">
        <div className="flex items-center space-x-2.5 bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/80 shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-white font-extrabold text-sm">{layout} CINEMA ROOM</span>
          <span className="text-slate-500">•</span>
          <span className="text-cyan-300">X: {pos.x.toFixed(2)}</span>
          <span className="text-emerald-300">Y: {pos.y.toFixed(2)}</span>
          <span className="text-purple-300">Z: {pos.z.toFixed(2)}</span>
          {upliftActive && (
            <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-600 font-bold ml-2">
              UPLIFT ACTIVE
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {onToggleAudition && (
            <button
              onClick={onToggleAudition}
              className={`pointer-events-auto flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border font-bold text-xs transition-all shadow-lg cursor-pointer ${
                isAuditioning
                  ? 'bg-emerald-500 text-black border-emerald-400 animate-pulse'
                  : 'bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border-cyan-500/50'
              }`}
            >
              <span>{isAuditioning ? '■ Stop Audition' : '▶ Audition Uplift in Room'}</span>
            </button>
          )}

          {isBinaural && (
            <div className="flex items-center space-x-1.5 bg-purple-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-500/70 text-purple-200">
              <span className="text-sm">🎧</span>
              <span className="font-bold">Binaural HRTF ON</span>
            </div>
          )}
        </div>
      </div>

      {/* Floating In-Room Multi-Channel VU Meter Bridge HUD */}
      <div className="absolute top-16 right-4 bg-black/85 backdrop-blur-md p-3 rounded-xl border border-slate-800/90 shadow-2xl font-mono text-[11px] pointer-events-auto max-w-[280px]">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 mb-2">
          <span className="text-cyan-400 font-bold flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>SPEAKER VU METERS</span>
          </span>
          <span className="text-[9px] text-slate-400">{layout} Layout</span>
        </div>

        <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
          {currentSpeakers.map((spk) => {
            let gain = 0.5;
            if (speakerGains && speakerGains[spk.id] !== undefined) {
              gain = typeof speakerGains[spk.id] === 'number' ? speakerGains[spk.id] : (speakerGains[spk.id].gain_norm || 0.5);
            }
            if (isAuditioning) {
              gain = Math.max(0.1, Math.min(1.0, gain + Math.sin(Date.now() * 0.01 + spk.id.charCodeAt(0)) * 0.15));
            }
            const gainPct = Math.round(gain * 100);
            const dbVal = Math.round(gain * 48 - 48);

            return (
              <div key={spk.id} className="flex items-center space-x-2">
                <span className={`w-8 font-bold text-[10px] ${spk.isLfe ? 'text-amber-400' : spk.isHeight ? 'text-purple-400' : 'text-cyan-400'}`}>
                  {spk.id}
                </span>

                {/* Segmented VU Bar */}
                <div className="flex-1 h-3 bg-slate-900 rounded-sm overflow-hidden flex border border-slate-800">
                  <div
                    className={`h-full transition-all duration-75 ${
                      spk.isLfe
                        ? 'bg-gradient-to-r from-amber-600 to-amber-400'
                        : spk.isHeight
                        ? 'bg-gradient-to-r from-purple-600 to-purple-400'
                        : 'bg-gradient-to-r from-emerald-500 via-yellow-400 to-cyan-400'
                    }`}
                    style={{ width: `${gainPct}%` }}
                  />
                </div>

                <span className="w-10 text-right text-[10px] text-slate-400">
                  {dbVal > -48 ? `${dbVal} dB` : '-inf'}
                </span>

                {/* Sound Indicator Status Dot */}
                <div
                  className={`w-2 h-2 rounded-full ${
                    gainPct > 80
                      ? 'bg-amber-400 shadow-md shadow-amber-400 animate-ping'
                      : gainPct > 20
                      ? 'bg-emerald-400 shadow-md shadow-emerald-400'
                      : 'bg-slate-700'
                  }`}
                  title={gainPct > 20 ? 'Active Sound Signal' : 'Standby'}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Camera View Switcher Buttons */}
      <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black/80 backdrop-blur-md p-1.5 rounded-xl border border-slate-800 text-[10px] font-mono">
        <span className="text-slate-400 px-1">Camera:</span>
        <button
          onClick={() => setCameraPreset('iso')}
          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
        >
          3D Perspective
        </button>
        <button
          onClick={() => setCameraPreset('top')}
          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
        >
          Top Down (2D)
        </button>
        <button
          onClick={() => setCameraPreset('sweetspot')}
          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
        >
          Sweet Spot Seat
        </button>
      </div>

      {/* Mouse Navigation Hints */}
      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[9px] font-mono text-slate-400 pointer-events-none">
        Click + Drag: Orbit 3D Room • Shift + Drag: Pan Sound Orb • Scroll: Zoom
      </div>

    </div>
  );
}
