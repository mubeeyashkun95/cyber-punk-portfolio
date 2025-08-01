import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text, Box, Cylinder } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

const LessonModule = ({ 
  position, 
  color, 
  completed = false,
  onClick 
}: { 
  position: [number, number, number]; 
  color: string;
  completed?: boolean;
  onClick?: () => void;
}) => {
  const meshRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      if (hovered) {
        meshRef.current.scale.setScalar(1.1);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group 
      ref={meshRef} 
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
        <Cylinder args={[0.8, 0.8, 0.4, 6]}>
          <meshStandardMaterial 
            color={completed ? "#10b981" : color} 
            transparent 
            opacity={0.8}
            emissive={completed ? "#10b981" : color}
            emissiveIntensity={0.1}
          />
        </Cylinder>
        {completed && (
          <Text
            position={[0, 0, 0.3]}
            fontSize={0.3}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            ✓
          </Text>
        )}
      </Float>
    </group>
  );
};

const ProgressRing = ({ progress, position }: {
  progress: number;
  position: [number, number, number];
}) => {
  const ringRef = useRef<Group>(null);
  
  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.01;
    }
  });

  return (
    <group ref={ringRef} position={position}>
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.1}>
        {/* Background ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2, 0.1, 16, 100]} />
          <meshStandardMaterial color="#333333" transparent opacity={0.3} />
        </mesh>
        {/* Progress ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2, 0.15, 16, Math.floor(100 * progress / 100)]} />
          <meshStandardMaterial 
            color="#00bfff" 
            emissive="#00bfff"
            emissiveIntensity={0.3}
          />
        </mesh>
        <Text
          position={[0, 0, 0]}
          fontSize={0.5}
          color="#00bfff"
          anchorX="center"
          anchorY="middle"
        >
          {progress}%
        </Text>
      </Float>
    </group>
  );
};

export const Course3D = ({ courseData }: { courseData?: any }) => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const modules = [
    { id: 1, completed: true, color: "#00bfff" },
    { id: 2, completed: true, color: "#8b5cf6" },
    { id: 3, completed: false, color: "#ec4899" },
    { id: 4, completed: false, color: "#10b981" },
    { id: 5, completed: false, color: "#f59e0b" },
    { id: 6, completed: false, color: "#ef4444" },
  ];

  return (
    <div className="h-[600px] relative">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#00bfff" />
          <pointLight position={[-10, 5, 5]} intensity={0.8} color="#8b5cf6" />
          <spotLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" />
          
          {/* Progress Ring */}
          <ProgressRing progress={35} position={[0, 0, -2]} />
          
          {/* Course Modules in a circular layout */}
          {modules.map((module, index) => {
            const angle = (index / modules.length) * Math.PI * 2;
            const radius = 4;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            
            return (
              <LessonModule
                key={module.id}
                position={[x, 0, z]}
                color={module.color}
                completed={module.completed}
                onClick={() => setSelectedModule(module.id)}
              />
            );
          })}
          
          {/* Central Course Title */}
          <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
            <Text
              position={[0, 3, 0]}
              fontSize={0.8}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              font="/fonts/Inter-Bold.woff"
            >
              React Fundamentals
            </Text>
          </Float>
          
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.2}
            maxDistance={15}
            minDistance={6}
          />
        </Suspense>
      </Canvas>
      
      {/* Module Info Overlay */}
      {selectedModule && (
        <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4 max-w-sm">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Module {selectedModule}
          </h3>
          <p className="text-sm text-muted-foreground">
            Interactive lesson content with videos, quizzes, and hands-on exercises.
          </p>
          <button 
            onClick={() => setSelectedModule(null)}
            className="mt-2 text-xs text-primary hover:underline"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};