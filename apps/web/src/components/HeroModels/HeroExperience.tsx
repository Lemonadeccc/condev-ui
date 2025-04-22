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

const SceneContent: FC<SceneContentProps> = ({
  rotationY,
  isMobile,
  lightIntensity,
  lightPosition,
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

      <group ref={groupRef} scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]}>
        <HeroLights intensity={lightIntensity} lightPosition={lightPosition} />
        
        <Cube />
      </group>
    </>
  );
};

interface HeroExperienceProps {
  rotationY?: number;
  lightIntensity: number;
  lightPosition: number[];
}

export const HeroExperience: FC<HeroExperienceProps> = ({
  rotationY = 0,
  lightIntensity,
  lightPosition,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <SceneContent
        rotationY={rotationY}
        isMobile={isMobile}
        lightIntensity={lightIntensity}
        lightPosition={lightPosition}
      />
    </Canvas>
  );
};
