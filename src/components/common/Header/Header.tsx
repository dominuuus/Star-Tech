import { NavLink } from "react-router-dom";
import images from "../../../assets/images";
import { MainTopMenu } from "../MainTopMenu/MainTopMenu";
import {
  HeaderContainer,
  LogoContainer,
  TopMenuContainer,
} from "./Header.styles";

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <NavLink to="/game/piloto">
          <img src={images.logo} alt="" />
        </NavLink>
      </LogoContainer>

      <TopMenuContainer>
        <MainTopMenu />
      </TopMenuContainer>
    </HeaderContainer>
  );
}
