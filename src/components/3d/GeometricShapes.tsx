import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const GeometricShapes = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (cubeRef.current) {
      cubeRef.current.rotation.x = time * 0.3;
      cubeRef.current.rotation.y = time * 0.2;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.y = time * 0.1;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.z = time * 0.1;
    }
  });

  return (
    <group>
      {/* Floating Cube */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={cubeRef} position={[-3, 2, 0]} scale={0.8}>
          <boxGeometry args={[1, 1, 1]} />
          <MeshDistortMaterial
            color="#00bfff"
            transparent
            opacity={0.8}
            distort={0.3}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Floating Sphere */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={sphereRef} position={[3, -1, -2]} scale={1.2}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            transparent
            opacity={0.7}
            distort={0.5}
            speed={1.5}
          />
        </mesh>
      </Float>

      {/* Floating Torus */}
      <Float speed={1} rotationIntensity={2} floatIntensity={1.5}>
        <mesh ref={torusRef} position={[0, -2, 1]} scale={0.6}>
          <torusGeometry args={[1, 0.4, 16, 100]} />
          <MeshDistortMaterial
            color="#ec4899"
            transparent
            opacity={0.6}
            distort={0.4}
            speed={3}
          />
        </mesh>
      </Float>

      {/* Wireframe Objects */}
      <mesh position={[-2, -3, -3]} rotation={[0.5, 0.5, 0]}>
        <octahedronGeometry args={[1]} />
        <meshBasicMaterial color="#00ff88" wireframe />
      </mesh>

      <mesh position={[4, 3, -1]} rotation={[0.3, 0.8, 0.2]}>
        <dodecahedronGeometry args={[0.8]} />
        <meshBasicMaterial color="#ff6b9d" wireframe />
      </mesh>
    </group>
  );
};