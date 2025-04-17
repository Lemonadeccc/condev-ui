import React, { FC, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Group as ThreeGroup } from "three";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import { Cube } from "./Cube";
import HeroLights from "./HeroLights";

// Interface for the inner component props
interface SceneContentProps {
  rotationY: number;
  isMobile: boolean;
  lightIntensity: number;
  lightPosition: number[];
}

// Inner component that lives inside the Canvas and can use hooks
const SceneContent: FC<SceneContentProps> = ({ 
  rotationY, 
  isMobile, 
  lightIntensity, 
  lightPosition 
}) => {
  // Ref and frame logic moved here
  const groupRef = useRef<ThreeGroup>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationY;
    }
  });

  return (
    <>
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Use lowercase 'group' which should work within Canvas context */}
      <group
        ref={groupRef}
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
      >
        <HeroLights intensity={lightIntensity} lightPosition={lightPosition} />
        <Cube />
      </group>
    </>
  );
};

// Interface for the main component props (if any, maybe just rotationY needed now)
interface HeroExperienceProps {
  rotationY?: number;
  lightIntensity: number;
  lightPosition: number[];
}

// Main component responsible only for Canvas setup
export const HeroExperience: FC<HeroExperienceProps> = ({ 
  rotationY = 0, 
  lightIntensity,
  lightPosition
}) => {
  // Calculate responsive flags here
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* Pass props to the inner component */}
      <SceneContent 
        rotationY={rotationY} 
        isMobile={isMobile} 
        lightIntensity={lightIntensity} 
        lightPosition={lightPosition} 
      />
    </Canvas>
  );
};
