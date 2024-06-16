import { OrbitControls, Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./components/Ground";
import { Lights } from "./components/Lights";
import { Mountain } from "./components/Mountain";
import { Lamp } from "./components/Lamp";
import { SignBoard } from "./components/SignBoard";

function App() {
  return (
    <div className="w-full h-screen bg-black ">
      <Canvas camera={{ position: [-150, 50, 152] }}>
        {/* Testing */}

        <axesHelper args={[1000]} />
        {/* <gridHelper args={[100, 100]} /> */}
        {/* <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh> */}

        {/* <Sky /> */}
        <Stars count={1000} radius={50} depth={200} />
        {/* Testing */}

        <OrbitControls />
        <Lights />
        <Lamp />
        <SignBoard />
        <Mountain />
        <Ground />
      </Canvas>
    </div>
  );
}

export default App;
