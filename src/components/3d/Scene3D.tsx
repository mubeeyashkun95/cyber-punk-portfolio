import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Text3D } from '@react-three/drei';
import { Suspense } from 'react';
import { GeometricShapes } from './GeometricShapes';
import { ParticleField } from './ParticleField';

interface Scene3DProps {
  children?: React.ReactNode;
  camera?: {
    position?: [number, number, number];
    fov?: number;
  };
  controls?: boolean;
}

export const Scene3D = ({ 
  children, 
  camera = { position: [0, 0, 5], fov: 75 },
  controls = true 
}: Scene3DProps) => {
  return (
    <Canvas
      camera={camera}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00bfff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        
        {/* Background Elements */}
        <Stars radius={300} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        <ParticleField />
        
        {/* 3D Content */}
        {children}
        
        {/* Controls */}
        {controls && (
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        )}
      </Suspense>
    </Canvas>
  );
};