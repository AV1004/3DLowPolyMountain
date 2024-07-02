import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import React, { useRef } from "react";
import { PointLightHelper, SpotLightHelper } from "three";

export const Lights = () => {
  const lightRef = useRef();

  useHelper(lightRef, PointLightHelper, 3, "red");
  // useHelper(lightRef, SpotLightHelper, 10, "red");

  // const { position, lightColor, lightIntensity, distance } = useControls({
  //   position: {
  //     value: { x: -123.0, y: 10.0, z: -89.0 },
  //   },
  //   lightColor: "white",
  //   lightIntensity: {
  //     value: 1.0,
  //     min: 0,
  //     max: 5,
  //     step: 0.1,
  //   },
  // });

  return (
    <>
      {/* <ambientLight /> */}
      {/* Campfire Light*/}
      <pointLight
        color={"orange"}
        intensity={1.7}
        position={[-78, 7, -44]}
        decay={false}
      />
      {/* Car's Headlight  */}
      <pointLight
        color={"white"}
        intensity={0.7}
        position={[-122, 9, -90]}
        decay={false}
      />
      <pointLight
        color={"white"}
        intensity={0.7}
        position={[-116, 9, -84]}
        decay={false}
      />
      {/* Lamps of Sign  */}
      {/* <pointLight
        color={"white"}
        intensity={2}
        position={[-122, 4, 118]}
        decay={false}
      /> */}
      <pointLight
        // ref={lightRef}
        color={"white"}
        intensity={3}
        position={[-121, 25, 123]}
        decay={false}
      />
      {/* <pointLight
        color={"white"}
        intensity={2}
        position={[-117, 4, 125]}
        decay={false}
      /> */}
    </>
  );
};
