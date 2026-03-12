import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PlanetProps {
  radius: number;
  orbitRadius: number;
  orbitSpeed: number;
  yOffset: number;
  color: string;
  scrollProgress: number;
}

const Planet = ({ radius, orbitRadius, orbitSpeed, yOffset, color, scrollProgress }: PlanetProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const angleRef = useRef(Math.random() * Math.PI * 2);

  const geometry = useMemo(() => new THREE.SphereGeometry(radius, 32, 32), [radius]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    angleRef.current += delta * orbitSpeed;
    meshRef.current.position.x = Math.cos(angleRef.current) * orbitRadius;
    meshRef.current.position.z = Math.sin(angleRef.current) * orbitRadius * 0.6;
    meshRef.current.position.y = yOffset;
    meshRef.current.rotation.y += delta * 0.3;

    // Fade out as scroll progresses past 0.3
    const opacity = scrollProgress > 0.25
      ? Math.max(0, 1 - (scrollProgress - 0.25) / 0.2)
      : 1;
    (meshRef.current.material as THREE.MeshStandardMaterial).opacity = opacity;
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        color={color}
        roughness={0.7}
        metalness={0.3}
        transparent
      />
    </mesh>
  );
};

export default Planet;
