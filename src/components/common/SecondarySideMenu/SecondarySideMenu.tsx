import { NavLink } from "react-router-dom";
import {
  MenuBlockOne,
  MenuBlockTwo,
  MenuContainer,
  MenuItem,
} from "./SecondarySideMenu.styles";
import {
  Lightning,
  Planet,
  RocketLaunch,
  Trophy,
  User,
  Wrench,
} from "phosphor-react";

export function SecondarySideMenu() {
  return (
    <MenuContainer>
      <MenuBlockOne>
        <MenuItem>
          <NavLink to="nave" title="Tutorial">
            <RocketLaunch size={23} weight="bold" />
            Nave
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="piloto" title="Tutorial">
            <User size={23} weight="bold" />
            Piloto
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="missoes" title="Tutorial">
            <Lightning size={23} weight="bold" />
            Missões
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="conquistas" title="Tutorial">
            <Trophy size={23} weight="bold" />
            Conquistas
          </NavLink>
        </MenuItem>
      </MenuBlockOne>

      <MenuBlockTwo>
        <MenuItem>
          <NavLink to="explorar" title="Tutorial">
            <Planet size={23} weight="fill" />
            Explorar
          </NavLink>
        </MenuItem>

        <MenuItem>
          <NavLink to="oficina" title="Tutorial">
            <Wrench size={23} weight="fill" />
            Oficina
          </NavLink>
        </MenuItem>
      </MenuBlockTwo>
    </MenuContainer>
  );
}
