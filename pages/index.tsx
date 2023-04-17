import { NextPage } from "next";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";
import { Text, Text3D } from "@react-three/drei";
import ThreeText from "./components/threeText";

const Home: NextPage = () => (
  <div>
    <ThreeText />
  </div>
);

export default Home;
