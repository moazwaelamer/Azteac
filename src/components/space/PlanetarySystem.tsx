import Planet from './Planet';

interface PlanetarySystemProps {
  scrollProgress: number;
}

const planets = [
 { radius:1.2, orbitRadius:18, orbitSpeed:0.15, yOffset:1.5, color:'#3a4566'},
 { radius:0.7, orbitRadius:24, orbitSpeed:0.1, yOffset:-2, color:'#556080'},
 { radius:1.8, orbitRadius:32, orbitSpeed:0.07, yOffset:3, color:'#44506a'},
 { radius:0.5, orbitRadius:14, orbitSpeed:0.2, yOffset:-1, color:'#667799'},
 { radius:1.0, orbitRadius:40, orbitSpeed:0.05, yOffset:-3.5, color:'#3d4d6b'},
 { radius:0.8, orbitRadius:28, orbitSpeed:0.12, yOffset:2.5, color:'#5a6a88'},
 { radius:2.2, orbitRadius:48, orbitSpeed:0.04, yOffset:-5, color:'#4b5f80'},
 { radius:0.6, orbitRadius:10, orbitSpeed:0.25, yOffset:0.5, color:'#7a8fb0'}
];

const PlanetarySystem = ({ scrollProgress }: PlanetarySystemProps) => {
  return (
    <group>
      {planets.map((p, i) => (
        <Planet key={i} {...p} scrollProgress={scrollProgress} />
      ))}
    </group>
  );
};

export default PlanetarySystem;
