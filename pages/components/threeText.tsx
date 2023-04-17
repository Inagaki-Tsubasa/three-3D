import { NextPage } from "next";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";
import { Text, Text3D } from "@react-three/drei";

type BoxProps = {
  position: [x: number, y: number, z: number];
};

const Box: React.FC<BoxProps> = (props) => {
  const mesh = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(() => (mesh.current.rotation.x += 0.01));
  // useFrame(() => (mesh.current.rotation.y += 0.04));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

const Rig = ({ v = new Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 1, state.mouse.y / 1, 10),
      0.08
    );
  });
};

const ThreeText: NextPage = () => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <Canvas>
      <ambientLight />
      <Rig />

      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Box position={[0, 0, -10]} />
      <Text
        position={[0, 2.5, 0]}
        rotation={[0, Math.PI / 8, 0]}
        fontSize={2}
        color={"#222"}
        maxWidth={10}
        lineHeight={2}
        letterSpacing={0.08}
        anchorX="center"
        anchorY="middle"
        outlineColor={"#222"}
        outlineWidth={0.1}
      >
        HELLO
      </Text>

      <Text
        position={[0, 0, 2]}
        rotation={[0, Math.PI / 8, 0]}
        fontSize={2}
        color={"#222"}
        maxWidth={10}
        lineHeight={2}
        letterSpacing={0.08}
        anchorX="center"
        anchorY="middle"
        outlineColor={"#222"}
        outlineWidth={0.1}

        // depth={0.1}
      >
        WORLD!!
      </Text>
    </Canvas>
  </div>
);

export default ThreeText;
