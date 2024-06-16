import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export const Lamp = () => {
  const model = useLoader(GLTFLoader, "/models/lantern.glb");
  return (
    <group>
      <object3D
        position={[-120, 0, 116]}
        rotation-y={4}
        scale={[0.3, 0.3, 0.3]}
      >
        <primitive object={model.scene.clone()} />
      </object3D>
      <object3D
        position={[-117.5, 34, 119.5]}
        rotation-y={4}
        scale={[0.3, 0.3, 0.3]}
      >
        <primitive object={model.scene.clone()} />
      </object3D>
      <object3D
        position={[-115, 0, 123]}
        rotation-y={4}
        scale={[0.3, 0.3, 0.3]}
      >
        <primitive object={model.scene.clone()} />
      </object3D>
    </group>
  );
};
