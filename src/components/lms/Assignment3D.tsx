import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text, Box, Cone } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

const AssignmentCard = ({ 
  position, 
  color, 
  status = "pending",
  title,
  dueDate,
  onClick 
}: { 
  position: [number, number, number]; 
  color: string;
  status?: "pending" | "submitted" | "graded";
  title: string;
  dueDate: string;
  onClick?: () => void;
}) => {
  const meshRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.1;
      
      if (hovered) {
        meshRef.current.scale.setScalar(1.05);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  const getStatusColor = () => {
    switch (status) {
      case "submitted": return "#f59e0b";
      case "graded": return "#10b981";
      default: return color;
    }
  };

  return (
    <group 
      ref={meshRef} 
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <Box args={[3, 2, 0.3]}>
          <meshStandardMaterial 
            color={getStatusColor()} 
            transparent 
            opacity={0.8}
            emissive={getStatusColor()}
            emissiveIntensity={0.1}
          />
        </Box>
        
        {/* Status indicator */}
        <Cone 
          args={[0.3, 0.5, 4]} 
          position={[1.2, 0.8, 0.2]}
          rotation={[0, 0, Math.PI]}
        >
          <meshStandardMaterial 
            color={getStatusColor()}
            emissive={getStatusColor()}
            emissiveIntensity={0.5}
          />
        </Cone>
        
        <Text
          position={[0, 0.3, 0.2]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
        >
          {title}
        </Text>
        
        <Text
          position={[0, -0.3, 0.2]}
          fontSize={0.2}
          color="#cccccc"
          anchorX="center"
          anchorY="middle"
        >
          Due: {dueDate}
        </Text>
        
        <Text
          position={[0, -0.7, 0.2]}
          fontSize={0.2}
          color={getStatusColor()}
          anchorX="center"
          anchorY="middle"
        >
          {status.toUpperCase()}
        </Text>
      </Float>
    </group>
  );
};

const GradeOrb = ({ grade, position }: {
  grade: number;
  position: [number, number, number];
}) => {
  const orbRef = useRef<Group>(null);
  
  useFrame(() => {
    if (orbRef.current) {
      orbRef.current.rotation.x += 0.01;
      orbRef.current.rotation.y += 0.02;
    }
  });

  const getGradeColor = () => {
    if (grade >= 90) return "#10b981";
    if (grade >= 80) return "#f59e0b";
    if (grade >= 70) return "#ec4899";
    return "#ef4444";
  };

  return (
    <group ref={orbRef} position={position}>
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial 
            color={getGradeColor()} 
            transparent 
            opacity={0.7}
            emissive={getGradeColor()}
            emissiveIntensity={0.2}
          />
        </mesh>
        <Text
          position={[0, 0, 0]}
          fontSize={0.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {grade}%
        </Text>
      </Float>
    </group>
  );
};

export const Assignment3D = () => {
  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(null);

  const assignments = [
    {
      id: "1",
      title: "React Components Lab",
      dueDate: "Dec 15",
      status: "graded" as const,
      grade: 95,
      color: "#00bfff"
    },
    {
      id: "2", 
      title: "State Management Quiz",
      dueDate: "Dec 18",
      status: "submitted" as const,
      color: "#8b5cf6"
    },
    {
      id: "3",
      title: "Final Project",
      dueDate: "Dec 22",
      status: "pending" as const,
      color: "#ec4899"
    },
    {
      id: "4",
      title: "Hooks Exercise",
      dueDate: "Dec 20",
      status: "graded" as const,
      grade: 87,
      color: "#10b981"
    }
  ];

  return (
    <div className="h-[600px] relative">
      <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#00bfff" />
          <pointLight position={[-10, 5, 5]} intensity={0.8} color="#8b5cf6" />
          <pointLight position={[5, -5, 5]} intensity={0.6} color="#ec4899" />
          
          {/* Assignment Cards */}
          {assignments.map((assignment, index) => (
            <AssignmentCard
              key={assignment.id}
              position={[
                (index % 2 === 0 ? -4 : 4),
                2 - (Math.floor(index / 2) * 2.5),
                0
              ]}
              color={assignment.color}
              status={assignment.status}
              title={assignment.title}
              dueDate={assignment.dueDate}
              onClick={() => setSelectedAssignment(assignment.id)}
            />
          ))}
          
          {/* Grade Orbs for completed assignments */}
          {assignments.filter(a => a.grade).map((assignment, index) => (
            <GradeOrb
              key={`grade-${assignment.id}`}
              grade={assignment.grade!}
              position={[
                8 - (index * 3),
                0,
                -3
              ]}
            />
          ))}
          
          {/* Average Grade Display */}
          <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
            <Text
              position={[0, 4, 0]}
              fontSize={0.6}
              color="#00bfff"
              anchorX="center"
              anchorY="middle"
            >
              Overall Grade: 91%
            </Text>
          </Float>
          
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.2}
            maxDistance={20}
            minDistance={8}
          />
        </Suspense>
      </Canvas>
      
      {/* Assignment Details Overlay */}
      {selectedAssignment && (
        <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-6 max-w-md">
          {(() => {
            const assignment = assignments.find(a => a.id === selectedAssignment);
            return assignment ? (
              <>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {assignment.title}
                </h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Due Date:</span> {assignment.dueDate}</p>
                  <p><span className="font-medium">Status:</span> 
                    <span className={`ml-1 px-2 py-1 rounded text-xs ${
                      assignment.status === 'graded' ? 'bg-green-500/20 text-green-400' :
                      assignment.status === 'submitted' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {assignment.status}
                    </span>
                  </p>
                  {assignment.grade && (
                    <p><span className="font-medium">Grade:</span> {assignment.grade}%</p>
                  )}
                  <div className="pt-2">
                    <p className="text-muted-foreground">
                      Interactive coding assignment with automatic grading and instant feedback.
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedAssignment(null)}
                  className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors text-sm"
                >
                  Close
                </button>
              </>
            ) : null;
          })()}
        </div>
      )}
    </div>
  );
};