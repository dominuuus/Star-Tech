import { MenuBlockOne, MenuBlockTwo, MenuContainer, MenuItem } from "./SecondarySideMenu.styles";
import {
  Alien,
  GraduationCap,
  Planet,
  RocketLaunch,
  Trophy,
  Wrench,
} from "phosphor-react";

export function SecondarySideMenu() {
  return (
    <MenuContainer>
      <MenuBlockOne>
        <MenuItem>
          <span>
            <Planet size={28} weight="fill"/>
          </span>
          <span>Base</span>
        </MenuItem>
        <MenuItem>
          <span>
            <GraduationCap size={28} weight="fill"/>
          </span>
          <span>Piloto</span>
        </MenuItem>
        <MenuItem>
          <span>
            <RocketLaunch size={28} weight="fill"/>
          </span>
          <span>Missões</span>
        </MenuItem>
        <MenuItem>
          <span>
            <Trophy size={28} weight="fill"/>
          </span>
          <span>Conquistas</span>
        </MenuItem>
      </MenuBlockOne>

      <MenuBlockTwo>
        <MenuItem>
          <span>
            <Alien size={28} weight="fill"/>
          </span>
          <span>Explorar</span>
        </MenuItem>

        <MenuItem>
          <span>
            <Wrench size={28} weight="fill"/>
          </span>
          <span>Oficina</span>
        </MenuItem>
      </MenuBlockTwo>
    </MenuContainer>
  );
}
