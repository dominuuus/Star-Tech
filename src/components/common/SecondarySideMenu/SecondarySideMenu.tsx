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
  Wrench,
} from "phosphor-react";
import images from "../../../assets/images";

export function SecondarySideMenu() {
  return (
    <MenuContainer>
      <MenuBlockOne>
        <MenuItem>
          <NavLink to="piloto" title="Piloto">
            <img src={images.helmet} height={23} />
            <span>Piloto</span>
          </NavLink>
        </MenuItem>

        <MenuItem>
          <NavLink to="nave" title="Nave">
            <RocketLaunch size={23} weight="bold" />
            <span>Nave</span>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="missoes" title="Missões">
            <Lightning size={23} weight="bold" />
            <span>Missões</span>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="conquistas" title="Conquistas">
            <Trophy size={23} weight="bold" />
            <span>Conquistas</span>
          </NavLink>
        </MenuItem>
      </MenuBlockOne>

      <MenuBlockTwo>
        <MenuItem>
          <NavLink to="explorar" title="Explorar">
            <Planet size={23} weight="fill" />
            <span>Explorar</span>
          </NavLink>
        </MenuItem>

        <MenuItem>
          <NavLink to="oficina" title="Oficina">
            <Wrench size={23} weight="fill" />
            <span>Oficina</span>
          </NavLink>
        </MenuItem>
      </MenuBlockTwo>
    </MenuContainer>
  );
}
