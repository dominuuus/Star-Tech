import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function Codestar3D() {
  const gltf = useLoader(GLTFLoader, '/files/codestar.glb');

  return (
    <primitive 
      object={gltf.scene} 
      scale={5.5} 
      position={[-0.5, 0, 0]}
      rotation={[0, Math.PI, 0]}
          />
  );
}