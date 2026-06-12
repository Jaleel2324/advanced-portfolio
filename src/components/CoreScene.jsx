import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, Sparkles } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function SceneRig({ progressRef }) {
  const { camera } = useThree();

  useFrame(() => {
    const p = progressRef.current || 0;

    const targetX = THREE.MathUtils.lerp(0, 0.9, p);
    const targetY = THREE.MathUtils.lerp(0, 0.25, p);
    const targetZ = THREE.MathUtils.lerp(7.5, 6.2, p);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);

    camera.lookAt(0, 0, 0);
  });

  return null;
}

function ShellPanel({ refProp, position, rotation }) {
  return (
    <group ref={refProp} position={position} rotation={rotation}>
      <RoundedBox args={[1.55, 1.55, 0.24]} radius={0.12} smoothness={4}>
        <meshStandardMaterial
          color="#0A1220"
          metalness={0.92}
          roughness={0.16}
          emissive="#0F172A"
          emissiveIntensity={0.35}
        />
      </RoundedBox>

      <mesh position={[0, 0, 0.15]}>
        <planeGeometry args={[0.95, 0.95]} />
        <meshBasicMaterial
          color="#60A5FA"
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}

function Rail({ refProp, position, rotation }) {
  return (
    <group ref={refProp} position={position} rotation={rotation}>
      <RoundedBox args={[0.22, 2.8, 0.12]} radius={0.06} smoothness={4}>
        <meshStandardMaterial
          color="#111827"
          metalness={0.95}
          roughness={0.18}
          emissive="#1D4ED8"
          emissiveIntensity={0.18}
        />
      </RoundedBox>
    </group>
  );
}

function Strut({ refProp, position, rotation }) {
  return (
    <group ref={refProp} position={position} rotation={rotation}>
      <RoundedBox args={[0.18, 1.65, 0.12]} radius={0.05} smoothness={4}>
        <meshStandardMaterial
          color="#1E293B"
          metalness={0.88}
          roughness={0.25}
          emissive="#0EA5E9"
          emissiveIntensity={0.12}
        />
      </RoundedBox>
    </group>
  );
}

function DetailShard({ refProp, position, scale = 1 }) {
  return (
    <group ref={refProp} position={position} scale={scale}>
      <mesh>
        <octahedronGeometry args={[0.16, 0]} />
        <meshStandardMaterial
          color="#BFDBFE"
          emissive="#60A5FA"
          emissiveIntensity={1.6}
          metalness={0.55}
          roughness={0.12}
        />
      </mesh>
    </group>
  );
}

function CoreModel({ progressRef }) {
  const root = useRef();

  const haloA = useRef();
  const haloB = useRef();
  const haloC = useRef();

  const panelTop = useRef();
  const panelRight = useRef();
  const panelBottom = useRef();
  const panelLeft = useRef();

  const railFront = useRef();
  const railBack = useRef();

  const strutNE = useRef();
  const strutNW = useRef();
  const strutSE = useRef();
  const strutSW = useRef();

  const coreShell = useRef();
  const core = useRef();
  const glowOrb = useRef();

  const shard1 = useRef();
  const shard2 = useRef();
  const shard3 = useRef();
  const shard4 = useRef();
  const shard5 = useRef();
  const shard6 = useRef();

  const shardRefs = [shard1, shard2, shard3, shard4, shard5, shard6];

  const shardTargets = useMemo(
    () => [
      new THREE.Vector3(-1.8, 1.6, 0.8),
      new THREE.Vector3(1.9, 1.2, -0.6),
      new THREE.Vector3(-2.0, -1.3, -0.4),
      new THREE.Vector3(1.7, -1.8, 0.7),
      new THREE.Vector3(0.0, 2.2, -1.0),
      new THREE.Vector3(0.0, -2.3, 1.0),
    ],
    []
  );

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const p = progressRef.current || 0;

    const shellOpen = THREE.MathUtils.smoothstep(p, 0.06, 0.28);
    const railOpen = THREE.MathUtils.smoothstep(p, 0.22, 0.46);
    const strutOpen = THREE.MathUtils.smoothstep(p, 0.38, 0.68);
    const shardOpen = THREE.MathUtils.smoothstep(p, 0.58, 0.92);

    if (root.current) {
      root.current.rotation.y = THREE.MathUtils.lerp(
        root.current.rotation.y,
        t * 0.15 + p * 0.6,
        0.06
      );

      root.current.rotation.x = THREE.MathUtils.lerp(
        root.current.rotation.x,
        Math.sin(t * 0.55) * 0.08,
        0.05
      );

      root.current.position.y = THREE.MathUtils.lerp(
        root.current.position.y,
        Math.sin(t * 0.9) * 0.08 - p * 0.18,
        0.05
      );
    }

    if (haloA.current) {
      haloA.current.rotation.z += delta * 0.18;
      const s = 1 + railOpen * 0.16;
      haloA.current.scale.set(s, s, s);
    }

    if (haloB.current) {
      haloB.current.rotation.x += delta * 0.26;
      haloB.current.rotation.z += delta * 0.1;
      const s = 1 + strutOpen * 0.12;
      haloB.current.scale.set(s, s, s);
    }

    if (haloC.current) {
      haloC.current.rotation.y -= delta * 0.36;
      const s = 1 + shardOpen * 0.08;
      haloC.current.scale.set(s, s, s);
    }

    if (panelTop.current) {
      panelTop.current.position.y = THREE.MathUtils.lerp(
        panelTop.current.position.y,
        2.0 + shellOpen * 1.9,
        0.08
      );
      panelTop.current.rotation.z = THREE.MathUtils.lerp(
        panelTop.current.rotation.z,
        0.15 + strutOpen * 0.35,
        0.08
      );
      panelTop.current.rotation.x = THREE.MathUtils.lerp(
        panelTop.current.rotation.x,
        -0.12 - strutOpen * 0.2,
        0.08
      );
    }

    if (panelRight.current) {
      panelRight.current.position.x = THREE.MathUtils.lerp(
        panelRight.current.position.x,
        2.0 + shellOpen * 1.9,
        0.08
      );
      panelRight.current.rotation.z = THREE.MathUtils.lerp(
        panelRight.current.rotation.z,
        0.45 + strutOpen * 0.3,
        0.08
      );
      panelRight.current.rotation.y = THREE.MathUtils.lerp(
        panelRight.current.rotation.y,
        -0.12 - strutOpen * 0.2,
        0.08
      );
    }

    if (panelBottom.current) {
      panelBottom.current.position.y = THREE.MathUtils.lerp(
        panelBottom.current.position.y,
        -2.0 - shellOpen * 1.9,
        0.08
      );
      panelBottom.current.rotation.z = THREE.MathUtils.lerp(
        panelBottom.current.rotation.z,
        -0.15 - strutOpen * 0.35,
        0.08
      );
      panelBottom.current.rotation.x = THREE.MathUtils.lerp(
        panelBottom.current.rotation.x,
        0.12 + strutOpen * 0.2,
        0.08
      );
    }

    if (panelLeft.current) {
      panelLeft.current.position.x = THREE.MathUtils.lerp(
        panelLeft.current.position.x,
        -2.0 - shellOpen * 1.9,
        0.08
      );
      panelLeft.current.rotation.z = THREE.MathUtils.lerp(
        panelLeft.current.rotation.z,
        -0.45 - strutOpen * 0.3,
        0.08
      );
      panelLeft.current.rotation.y = THREE.MathUtils.lerp(
        panelLeft.current.rotation.y,
        0.12 + strutOpen * 0.2,
        0.08
      );
    }

    if (railFront.current) {
      railFront.current.position.z = THREE.MathUtils.lerp(
        railFront.current.position.z,
        0.55 + railOpen * 1.15,
        0.08
      );
      railFront.current.rotation.z += delta * 0.08;
    }

    if (railBack.current) {
      railBack.current.position.z = THREE.MathUtils.lerp(
        railBack.current.position.z,
        -0.55 - railOpen * 1.15,
        0.08
      );
      railBack.current.rotation.z -= delta * 0.08;
    }

    const strutDistance = 1.15 + strutOpen * 1.15;

    if (strutNE.current) {
      strutNE.current.position.set(strutDistance, strutDistance, 0.2);
      strutNE.current.rotation.z = THREE.MathUtils.lerp(
        strutNE.current.rotation.z,
        -0.78,
        0.08
      );
    }

    if (strutNW.current) {
      strutNW.current.position.set(-strutDistance, strutDistance, -0.2);
      strutNW.current.rotation.z = THREE.MathUtils.lerp(
        strutNW.current.rotation.z,
        0.78,
        0.08
      );
    }

    if (strutSE.current) {
      strutSE.current.position.set(strutDistance, -strutDistance, -0.15);
      strutSE.current.rotation.z = THREE.MathUtils.lerp(
        strutSE.current.rotation.z,
        0.78,
        0.08
      );
    }

    if (strutSW.current) {
      strutSW.current.position.set(-strutDistance, -strutDistance, 0.15);
      strutSW.current.rotation.z = THREE.MathUtils.lerp(
        strutSW.current.rotation.z,
        -0.78,
        0.08
      );
    }

    if (coreShell.current) {
      const coreScale = 1 + railOpen * 0.05 + shardOpen * 0.06;
      coreShell.current.scale.set(coreScale, coreScale, coreScale);
      coreShell.current.rotation.y += delta * 0.15;
    }

    if (glowOrb.current) {
      const pulse = 1 + Math.sin(t * 2.4) * 0.06 + shardOpen * 0.12;
      glowOrb.current.scale.set(pulse, pulse, pulse);
    }

    if (core.current) {
      const pulse = 1 + Math.sin(t * 2.8) * 0.04 + shardOpen * 0.1;
      core.current.scale.set(pulse, pulse, pulse);
      core.current.rotation.x += delta * 0.35;
      core.current.rotation.y += delta * 0.55;
    }

    shardRefs.forEach((ref, index) => {
      if (!ref.current) return;

      const base = new THREE.Vector3(
        Math.cos((index / 6) * Math.PI * 2) * 0.8,
        Math.sin((index / 6) * Math.PI * 2) * 0.8,
        index % 2 === 0 ? 0.18 : -0.18
      );

      const target = shardTargets[index];
      ref.current.position.lerpVectors(base, target, shardOpen);
      ref.current.rotation.x += delta * (0.4 + index * 0.05);
      ref.current.rotation.y += delta * (0.55 + index * 0.04);
    });
  });

  return (
    <group ref={root} scale={1.08}>
      <mesh ref={haloA}>
        <torusGeometry args={[2.45, 0.035, 22, 180]} />
        <meshStandardMaterial
          color="#60A5FA"
          emissive="#1D4ED8"
          emissiveIntensity={1.5}
          metalness={0.92}
          roughness={0.2}
        />
      </mesh>

      <mesh ref={haloB} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.045, 22, 160]} />
        <meshStandardMaterial
          color="#93C5FD"
          emissive="#0EA5E9"
          emissiveIntensity={1.1}
          metalness={0.88}
          roughness={0.24}
        />
      </mesh>

      <mesh ref={haloC} rotation={[0.75, 0.25, 0]}>
        <torusGeometry args={[1.2, 0.04, 20, 120]} />
        <meshStandardMaterial
          color="#C4B5FD"
          emissive="#60A5FA"
          emissiveIntensity={0.75}
          metalness={0.82}
          roughness={0.28}
        />
      </mesh>

      <ShellPanel refProp={panelTop} position={[0, 2, 0]} rotation={[-0.08, 0, 0]} />
      <ShellPanel refProp={panelRight} position={[2, 0, 0]} rotation={[0, -0.08, 0]} />
      <ShellPanel refProp={panelBottom} position={[0, -2, 0]} rotation={[0.08, 0, 0]} />
      <ShellPanel refProp={panelLeft} position={[-2, 0, 0]} rotation={[0, 0.08, 0]} />

      <Rail refProp={railFront} position={[0, 0, 0.55]} rotation={[0, 0, 0.35]} />
      <Rail refProp={railBack} position={[0, 0, -0.55]} rotation={[0, 0, -0.35]} />

      <Strut refProp={strutNE} position={[1.15, 1.15, 0.2]} rotation={[0, 0, -0.78]} />
      <Strut refProp={strutNW} position={[-1.15, 1.15, -0.2]} rotation={[0, 0, 0.78]} />
      <Strut refProp={strutSE} position={[1.15, -1.15, -0.15]} rotation={[0, 0, 0.78]} />
      <Strut refProp={strutSW} position={[-1.15, -1.15, 0.15]} rotation={[0, 0, -0.78]} />

      <group ref={coreShell}>
        <mesh>
          <sphereGeometry args={[0.88, 48, 48]} />
          <meshStandardMaterial
            color="#0B1020"
            metalness={0.82}
            roughness={0.12}
            emissive="#1D4ED8"
            emissiveIntensity={0.45}
            transparent
            opacity={0.92}
          />
        </mesh>
      </group>

      <group ref={glowOrb}>
        <mesh>
          <sphereGeometry args={[0.5, 40, 40]} />
          <meshStandardMaterial
            color="#93C5FD"
            emissive="#60A5FA"
            emissiveIntensity={2.8}
            metalness={0.25}
            roughness={0.04}
          />
        </mesh>
      </group>

      <group ref={core}>
        <mesh rotation={[0.3, 0.2, 0]}>
          <icosahedronGeometry args={[0.32, 1]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#DBEAFE"
            emissiveIntensity={1.6}
            metalness={0.2}
            roughness={0.02}
          />
        </mesh>
      </group>

      <DetailShard refProp={shard1} position={[-0.8, 0.2, 0.18]} />
      <DetailShard refProp={shard2} position={[0.8, 0.2, -0.18]} />
      <DetailShard refProp={shard3} position={[-0.35, -0.72, 0.18]} scale={0.9} />
      <DetailShard refProp={shard4} position={[0.4, -0.74, -0.18]} scale={0.95} />
      <DetailShard refProp={shard5} position={[0, 0.82, -0.18]} scale={0.85} />
      <DetailShard refProp={shard6} position={[0, -0.88, 0.18]} scale={0.85} />

      <Sparkles
        count={56}
        scale={[8, 8, 8]}
        size={2.4}
        speed={0.2}
        color="#60A5FA"
      />
    </group>
  );
}

export default function CoreScene({ progressRef }) {
  return (
    <div className="w-full h-[400px] sm:h-[520px] lg:h-[660px]">
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 7.5], fov: 42 }}>
        <Suspense fallback={null}>
          <color attach="background" args={["#05010F"]} />
          <fog attach="fog" args={["#05010F", 8, 15]} />

          <ambientLight intensity={0.7} />
          <directionalLight position={[4, 5, 4]} intensity={1.5} color="#E0F2FE" />
          <directionalLight position={[-4, -2, 3]} intensity={0.7} color="#60A5FA" />
          <pointLight position={[0, 0, 3]} intensity={2.6} color="#60A5FA" />
          <pointLight position={[0, 0, -3]} intensity={1.2} color="#1D4ED8" />
          <pointLight position={[2, 2, 2]} intensity={0.9} color="#C4B5FD" />

          <SceneRig progressRef={progressRef} />
          <CoreModel progressRef={progressRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}
