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
            <span>Nave</span>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="piloto" title="Tutorial">
            <User size={23} weight="bold" />
            <span>Piloto</span>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="missoes" title="Tutorial">
            <Lightning size={23} weight="bold"/>
            <span>Missões</span>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="conquistas" title="Tutorial">
            <Trophy size={23} weight="bold" />
            <span>Conquistas</span>
          </NavLink>
        </MenuItem>
      </MenuBlockOne>

      <MenuBlockTwo>
        <MenuItem>
          <NavLink to="explorar" title="Tutorial">
            <Planet size={23} weight="fill" />
            <span>Explorar</span>
          </NavLink>
        </MenuItem>

        <MenuItem>
          <NavLink to="oficina" title="Tutorial">
            <Wrench size={23} weight="fill" />
            <span>Oficina</span>
          </NavLink>
        </MenuItem>
      </MenuBlockTwo>
    </MenuContainer>
  );
}
