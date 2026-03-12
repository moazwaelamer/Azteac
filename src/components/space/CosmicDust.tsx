import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CosmicDustProps {
  count?: number;
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
}

const CosmicDust = ({ count = 500, mousePos }: CosmicDustProps) => {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 150;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 150;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 150;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.005;
    ref.current.rotation.x += delta * 0.002;
    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      mousePos.current.x * 3,
      0.01
    );
    ref.current.position.y = THREE.MathUtils.lerp(
      ref.current.position.y,
      mousePos.current.y * 3,
      0.01
    );
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.3}
        color="#8899BB"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

export default CosmicDust;
