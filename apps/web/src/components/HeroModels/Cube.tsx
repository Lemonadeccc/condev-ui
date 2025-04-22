import React from "react";

import { useGLTF } from "@react-three/drei";

const modelPath = `${import.meta.env.BASE_URL}models/quantum_cube.glb`;

export function Cube(props) {
  const group = React.useRef();
  const { nodes, materials } = useGLTF(modelPath);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sphere_0" scale={55.366}>
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.color}
                />
              </group>
              <group name="Cube002_2" scale={5.653}>
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Cube001_3" scale={5.653}>
                <mesh
                  name="Object_10"
                  geometry={nodes.Object_10.geometry}
                  material={materials.material_3}
                />
              </group>
              <group name="Cube003_4" scale={5.653}>
                <mesh
                  name="Object_12"
                  geometry={nodes.Object_12.geometry}
                  material={materials.material_4}
                />
              </group>
              <group name="Cube004_5" scale={5.653}>
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials.material_5}
                />
              </group>
              <group name="Cube005_6" scale={5.653}>
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials.material_6}
                />
              </group>
              <group name="Cube006_7" scale={5.653}>
                <mesh
                  name="Object_18"
                  geometry={nodes.Object_18.geometry}
                  material={materials.material_7}
                />
              </group>
              <group name="Cube007_8" scale={5.653}>
                <mesh
                  name="Object_20"
                  geometry={nodes.Object_20.geometry}
                  material={materials.material_8}
                />
              </group>
              <group name="Cube008_9" scale={5.653}>
                <mesh
                  name="Object_22"
                  geometry={nodes.Object_22.geometry}
                  material={materials.material_9}
                />
              </group>
              <group name="Cube009_10" scale={5.653}>
                <mesh
                  name="Object_24"
                  geometry={nodes.Object_24.geometry}
                  material={materials.material_10}
                />
              </group>
              <group name="Cube010_11" scale={5.653}>
                <mesh
                  name="Object_26"
                  geometry={nodes.Object_26.geometry}
                  material={materials.material_11}
                />
              </group>
              <group
                name="Cube_1"
                rotation={[-Math.PI, 0, 0]}
                scale={[-0.147, 0.147, 0.147]}
              >
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.cube}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelPath);
