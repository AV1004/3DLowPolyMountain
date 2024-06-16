import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export const Mountain = () => {
  const model = useLoader(GLTFLoader, "/models/main.glb");
  return (
    <group position={[0, -0.1, 0]} rotation-y={3.15}>
      <primitive object={model.scene} />
    </group>
  );
};
