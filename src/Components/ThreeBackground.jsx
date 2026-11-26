import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

const _dummyObj = new THREE.Object3D();

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isSoftwareGl = (() => {
      try {
        const probe = document.createElement("canvas");
        const gl = probe.getContext("webgl2") || probe.getContext("webgl");
        if (!gl) return true;
        const ext = gl.getExtension("WEBGL_debug_renderer_info");
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension("WEBGL_lose_context")?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    })();

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.011);

    const width = window.innerWidth || 1280;
    const height = window.innerHeight || 720;

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 250);
    camera.position.set(0, 0, 32);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Warm key + cool sky/ground fill for crisp white-studio 3D depth
    const hemiLight = new THREE.HemisphereLight(0xe0f2fe, 0xcbd5e1, 1.35);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, 2.2);
    keyLight.position.set(16, 22, 18);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x3b82f6, 1.8);
    rimLight.position.set(-18, -12, 12);
    scene.add(rimLight);

    // Composite 3D geometric assemblies visible across the white canvas
    const clusterGroup = new THREE.Group();
    scene.add(clusterGroup);

    const coreGeom = new THREE.OctahedronGeometry(1.5, 0);
    const ringGeom = new THREE.TorusGeometry(2.15, 0.12, 12, 48);
    const collarGeom = new THREE.CylinderGeometry(0.45, 0.45, 3.4, 16);

    const cobaltMat = new THREE.MeshPhysicalMaterial({
      color: 0x3b82f6,
      metalness: 0.65,
      roughness: 0.25,
      clearcoat: 0.9,
      transparent: true,
      opacity: 0.55,
    });

    const indigoMat = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      metalness: 0.6,
      roughness: 0.28,
      clearcoat: 0.8,
      transparent: true,
      opacity: 0.5,
    });

    const skyMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      metalness: 0.5,
      roughness: 0.22,
      clearcoat: 1.0,
      transparent: true,
      opacity: 0.55,
    });

    const silverMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.8,
      roughness: 0.28,
      transparent: true,
      opacity: 0.45,
    });

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });

    const coreMaterials = [cobaltMat, indigoMat, skyMat];
    const assemblies = [];

    // Peripheral studio layout so 3D geometry frames content without obscuring center text
    const layoutSeeds = [
      [-21, 12, -12, 1.05],
      [22, 11, -10, 1.15],
      [-23, -8, -14, 0.95],
      [23, -10, -11, 1.1],
      [-15, 16, -20, 0.85],
      [15, -16, -16, 0.85],
      [16, 17, -18, 0.85],
      [-26, 2, -16, 0.85],
      [26, 1, -17, 0.85],
      [-15, -15, -15, 0.9],
    ];

    layoutSeeds.forEach(([x, y, z, scale], idx) => {
      const unit = new THREE.Group();

      const core = new THREE.Mesh(coreGeom, coreMaterials[idx % coreMaterials.length]);
      const ring = new THREE.Mesh(ringGeom, silverMat);
      ring.rotation.x = Math.PI / 3;
      const collar = new THREE.Mesh(collarGeom, wireMat);
      collar.rotation.z = Math.PI / 4;

      unit.add(core, ring, collar);
      unit.position.set(x, y, z);
      unit.scale.setScalar(scale);

      clusterGroup.add(unit);
      assemblies.push({
        group: unit,
        ring,
        baseY: y,
        speedX: 0.22 + (idx % 3) * 0.08,
        speedY: 0.28 + (idx % 4) * 0.06,
        phase: idx * 0.85,
      });
    });

    // Instanced floating micro-nodes for clean depth perception
    const nodeCount = 96;
    const nodeGeom = new THREE.IcosahedronGeometry(0.18, 0);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      metalness: 0.4,
      roughness: 0.35,
      transparent: true,
      opacity: 0.55,
    });
    const instancedNodes = new THREE.InstancedMesh(nodeGeom, nodeMat, nodeCount);
    const nodeData = [];
    for (let i = 0; i < nodeCount; i++) {
      const px = (Math.sin(i * 12.9898) * 43758.5453 % 1) * 58 - 29;
      const py = (Math.sin(i * 78.233) * 24634.6345 % 1) * 42 - 21;
      const pz = -4 - ((i * 7) % 28);
      const s = 0.65 + (i % 5) * 0.18;
      nodeData.push({ px, py, pz, s });
      _dummyObj.position.set(px, py, pz);
      _dummyObj.scale.setScalar(s);
      _dummyObj.updateMatrix();
      instancedNodes.setMatrixAt(i, _dummyObj.matrix);
    }
    instancedNodes.instanceMatrix.needsUpdate = true;
    instancedNodes.computeBoundingSphere();
    scene.add(instancedNodes);

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    let mouseX = 0;
    let mouseY = 0;
    let scrollProgress = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / (window.innerWidth || 1) - 0.5) * 2;
      mouseY = (e.clientY / (window.innerHeight || 1) - 0.5) * 2;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollProgress = window.scrollY / maxScroll;
    };

    const handleResize = () => {
      const w = window.innerWidth || 1280;
      const h = window.innerHeight || 720;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    let frameId = 0;
    let disposed = false;
    const startTime = performance.now();
    let prevTime = startTime;

    function afterDraw(cb) {
      const gl = renderer.getContext();
      if (!gl || !gl.fenceSync) {
        frameId = window.setTimeout(cb, 80);
        return;
      }
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        if (disposed) {
          if (sync) gl.deleteSync(sync);
          return;
        }
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    const tick = () => {
      if (disposed) return;
      const now = performance.now();
      const delta = Math.min((now - prevTime) / 1000, 0.05);
      const elapsed = (now - startTime) / 1000;
      prevTime = now;

      const targetCamX = mouseX * 3.2;
      const targetCamY = -mouseY * 2.4 - scrollProgress * 6.0;
      camera.position.x = THREE.MathUtils.damp(camera.position.x, targetCamX, 4, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, targetCamY, 4, delta);
      camera.lookAt(0, -scrollProgress * 4.5, 0);

      clusterGroup.rotation.y = elapsed * 0.045;

      for (let i = 0; i < assemblies.length; i++) {
        const item = assemblies[i];
        item.group.rotation.x += delta * item.speedX;
        item.group.rotation.y += delta * item.speedY;
        item.ring.rotation.z += delta * 0.5;
        item.group.position.y = item.baseY + Math.sin(elapsed * 0.9 + item.phase) * 1.1;
      }

      instancedNodes.rotation.y = elapsed * 0.025;

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    };

    tick();

    return () => {
      disposed = true;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeom.dispose();
      ringGeom.dispose();
      collarGeom.dispose();
      nodeGeom.dispose();
      cobaltMat.dispose();
      indigoMat.dispose();
      skyMat.dispose();
      silverMat.dispose();
      wireMat.dispose();
      nodeMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-testid="three-background-canvas"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 18% 18%, #eff6ff 0%, #ffffff 48%, #f1f5f9 100%)",
      }}
    />
  );
}
