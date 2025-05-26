import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function Astronaut3D() {
  const gltf = useLoader(GLTFLoader, "/astronaut3d/astronauta-homem.glb");

  return (
    <primitive
      object={gltf.scene}
      scale={3.5}
      position={[0, 0, 0]}
      rotation={[0.3, -Math.PI/2, 0]}
    />
  );
}