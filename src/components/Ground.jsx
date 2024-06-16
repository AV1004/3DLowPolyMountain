import React from "react";

export const Ground = () => {
  return (
    <mesh rotation-x={Math.PI * -0.5}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color={"#70A06D"} />
    </mesh>
  );
};
