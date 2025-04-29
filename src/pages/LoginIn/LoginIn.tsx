import { NavLink } from "react-router-dom";
import {
    HeaderContainer,
  LoginContainer,
  LoginContent,
  LoginSectionOne,
  LoginSectionTwo,
} from "./LoginIn.styles";
import { HeaderNotLogged } from "../../components/common/HeaderNotLogged/HeaderNotLogged";
import planets from "../../assets/planets";

export function LoginIn() {
  return (
    <>
      <LoginContainer>
          <HeaderContainer>
              <HeaderNotLogged />
          </HeaderContainer>
          <LoginContent>
            <LoginSectionOne>
              <div>
                <img src={planets.aerisbg} alt="" />
              </div>
            </LoginSectionOne>
            <LoginSectionTwo>
              <span>Acesse seu painel</span>
              <NavLink to="game/piloto">
                <button>Entrar</button>
              </NavLink>
            </LoginSectionTwo>
          </LoginContent>
      </LoginContainer>
    </>
  );
}
