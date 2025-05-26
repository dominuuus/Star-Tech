import { Canvas } from "@react-three/fiber";
import { HeaderNotLogged } from "../../components/common/HeaderNotLogged/HeaderNotLogged";
import { OrbitControls } from "@react-three/drei";
import {
  AuthSection,
  LoginInContainer,
  LoginInContent,
} from "./LoginIn.styles";
import { NavLink } from "react-router-dom";
import { Pyron3D } from "../../components/3D/Pyron3D";

export function LoginIn() {
  return (
    <>
      <LoginInContainer>
        <HeaderNotLogged />

        <LoginInContent>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            style={{ right: 200, transform: "rotate()" }}
          >
            <ambientLight intensity={3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <Pyron3D />
            <OrbitControls autoRotate autoRotateSpeed={0.6} />
          </Canvas>

          <AuthSection>
            <span>Acesse seu painel</span>
            <NavLink to="game/piloto">
              <button>Entrar</button>
            </NavLink>
          </AuthSection>
        </LoginInContent>
      </LoginInContainer>
    </>
  );
}
