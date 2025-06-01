import { NavLink } from "react-router-dom";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import {
  CardMobileMenu,
  HamburgerIcon,
  MainTopMenuContainer,
  NavigationContainer,
  ProfileContainer,
  SearchContainer,
} from "./MainTopMenu.styles";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

export function MainTopMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MainTopMenuContainer>
      <HamburgerIcon
        className={isOpen ? "open" : ""}
        onClick={toggleMenu}
        role="button"
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        <div></div>
        <div></div>
        <div></div>
      </HamburgerIcon>
      <NavigationContainer $isOpen={isOpen}>
        
        <nav>
          
          <ul>
            <CardMobileMenu>
              <ProfileCard />
            </CardMobileMenu>
            <li>
              <NavLink to="/game/piloto" title="Home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="docs" title="Documentação">
                Docs
              </NavLink>
            </li>
            <li>
              <span>Shop</span>
            </li>
            <li>
              <NavLink to="/" title="Home">
                Sair
              </NavLink>
            </li>
          </ul>
        </nav>
      </NavigationContainer>

      <SearchContainer>
        <MagnifyingGlass />
        <input type="text" placeholder="Pesquisar" />
      </SearchContainer>

      <ProfileContainer>
        <ProfileCard />
      </ProfileContainer>
    </MainTopMenuContainer>
  );
}
