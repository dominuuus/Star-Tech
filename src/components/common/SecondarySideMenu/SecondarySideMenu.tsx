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
            <RocketLaunch size={28} weight="fill" />
            Nave
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="piloto" title="Tutorial">
            <User size={28} weight="fill" />
            Piloto
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="missoes" title="Tutorial">
            <Lightning size={32} weight="fill" />
            Missões
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="conquistas" title="Tutorial">
            <Trophy size={28} weight="fill" />
            Conquistas
          </NavLink>
        </MenuItem>
      </MenuBlockOne>

      <MenuBlockTwo>
        <MenuItem>
          <NavLink to="explorar" title="Tutorial">
            <Planet size={28} weight="fill" />
            Explorar
          </NavLink>
        </MenuItem>

        <MenuItem>
          <NavLink to="oficina" title="Tutorial">
            <Wrench size={28} weight="fill" />
            Oficina
          </NavLink>
        </MenuItem>
      </MenuBlockTwo>
    </MenuContainer>
  );
}
