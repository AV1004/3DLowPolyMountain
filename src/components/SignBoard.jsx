import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export const SignBoard = () => {
  const model = useLoader(GLTFLoader, "/models/signBoard.glb");
  return (
    <group position={[-118, 0, 120]} rotation-y={4}>
      <primitive object={model.scene} />
    </group>
  );
};
