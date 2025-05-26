import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function Pyron3D() {
  const gltf = useLoader(GLTFLoader, "files/pyron.glb");

  return (
    <primitive
      object={gltf.scene}
      scale={3.5}
      position={[0, 0, 0]}
      rotation={[0.3, -Math.PI/2, 0]}
    />
  );
}