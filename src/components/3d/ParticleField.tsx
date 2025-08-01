import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const ParticleField = () => {
  const meshRef = useRef<THREE.Points>(null);
  
  const particlesCount = 5000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      
      // Position
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = (Math.random() - 0.5) * 50;
      positions[i3 + 2] = (Math.random() - 0.5) * 50;
      
      // Color (cyberpunk palette)
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        // Cyan
        colors[i3] = 0;
        colors[i3 + 1] = 0.75;
        colors[i3 + 2] = 1;
      } else if (colorChoice < 0.66) {
        // Purple
        colors[i3] = 0.54;
        colors[i3 + 1] = 0.36;
        colors[i3 + 2] = 0.96;
      } else {
        // Pink
        colors[i3] = 0.93;
        colors[i3 + 1] = 0.29;
        colors[i3 + 2] = 0.6;
      }
    }
    
    return [positions, colors];
  }, []);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.05;
      meshRef.current.rotation.x = time * 0.02;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        transparent
        opacity={0.6}
        vertexColors
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};