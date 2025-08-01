import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Box, Sphere } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

const FloatingCard = ({ position, color, children }: { 
  position: [number, number, number]; 
  color: string;
  children: React.ReactNode;
}) => {
  const meshRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <Box args={[2, 1.2, 0.2]} position={[0, 0, 0]}>
          <meshStandardMaterial color={color} transparent opacity={0.8} />
        </Box>
        <mesh position={[0, 0, 0.11]}>
          <planeGeometry args={[1.8, 1]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      </Float>
    </group>
  );
};

const StatsOrb = ({ position, color, scale = 1 }: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) => {
  const meshRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.2}>
        <Sphere args={[0.8, 32, 32]}>
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.7}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>
    </group>
  );
};

export const Dashboard3D = () => {
  return (
    <div className="h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#00bfff" />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[5, 5, 5]} intensity={0.3} color="#ec4899" />
          
          {/* Course Cards */}
          <FloatingCard position={[-3, 1, 0]} color="#00bfff">
            <div>My Courses</div>
          </FloatingCard>
          
          <FloatingCard position={[3, 1, 0]} color="#8b5cf6">
            <div>Assignments</div>
          </FloatingCard>
          
          <FloatingCard position={[-3, -1, 0]} color="#ec4899">
            <div>Progress</div>
          </FloatingCard>
          
          <FloatingCard position={[3, -1, 0]} color="#10b981">
            <div>Achievements</div>
          </FloatingCard>
          
          {/* Stats Orbs */}
          <StatsOrb position={[0, 2.5, -2]} color="#00bfff" scale={0.6} />
          <StatsOrb position={[-4, 0, -3]} color="#8b5cf6" scale={0.4} />
          <StatsOrb position={[4, 0, -3]} color="#ec4899" scale={0.4} />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};