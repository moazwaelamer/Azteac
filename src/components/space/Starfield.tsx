import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface StarfieldProps {
  count?: number;
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
}

const Starfield = ({ count = 12000, mousePos }: StarfieldProps) => {
  const meshRef = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 400;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 400;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 400;
     sz[i] = Math.random() *  0.5 + 0.05;
    }
    return [pos, sz];
  }, [count]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.002;
  meshRef.current.position.x = THREE.MathUtils.lerp(
 meshRef.current.position.x,
 mousePos.current.x * 6,
 0.05
);

meshRef.current.position.y = THREE.MathUtils.lerp(
 meshRef.current.position.y,
 mousePos.current.y * 6,
 0.05
);
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
  <pointsMaterial
 size={0.18}
 color="#ffffff"
 transparent
 opacity={0.9}
 sizeAttenuation
 depthWrite={false}
/>
    </points>
  );
};

export default Starfield;
