import { OrbitControls } from "@react-three/drei";
import {
  AuthSection,
  LoginInContainer,
  LoginInContent,
  StyledCanvas,
} from "./LoginIn.styles";
import { NavLink } from "react-router-dom";
import { Pyron3D } from "../../components/3D/Pyron3D";

export function LoginIn() {
  return (
    <>
      <LoginInContainer>
        <LoginInContent>
          <StyledCanvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Pyron3D />
            <OrbitControls autoRotate autoRotateSpeed={0.6} />
          </StyledCanvas>

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
