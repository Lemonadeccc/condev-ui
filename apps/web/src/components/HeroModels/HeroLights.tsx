import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Import THREE for Vector3

import { useThree } from "@react-three/fiber"; // Import useThree to add target to scene

interface HeroLightsProps {
  intensity: number;
  lightPosition: number[]; // Expecting [x, y, z]
}

const HeroLights: React.FC<HeroLightsProps> = ({
  intensity,
  lightPosition,
}) => {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const targetRef = useRef<THREE.Object3D | null>(null); // Correct ref type
  const { scene } = useThree(); // Get scene object

  // Ensure the target object is created and added to the scene
  useEffect(() => {
    let target: THREE.Object3D | null = null; // Define target locally
    if (lightRef.current && !targetRef.current) {
      // Create a target object if it doesn't exist
      target = new THREE.Object3D();
      target.position.set(0, 0, 0); // Default target at origin
      scene.add(target); // Add target to the scene
      lightRef.current.target = target;
      targetRef.current = target; // Assign to ref
    }
    // Cleanup: remove target when component unmounts
    return () => {
      // Use the ref for cleanup
      if (targetRef.current) {
        scene.remove(targetRef.current);
        targetRef.current = null; // Clear ref
      }
    };
  }, [scene]); // Depend on scene

  // Update light properties when props change
  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.intensity = intensity;
      lightRef.current.position.set(
        lightPosition[0],
        lightPosition[1],
        lightPosition[2]
      );
      // Ensure target is updated if it exists
      if (targetRef.current && lightRef.current.target !== targetRef.current) {
        lightRef.current.target = targetRef.current;
      }
    }
  }, [intensity, lightPosition]);

  return (
    <>
      <ambientLight intensity={0.2} color="#1a1a40" />

      <directionalLight
        ref={lightRef}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};

export default HeroLights;
