import { MenuBlockOne, MenuBlockTwo, MenuContainer, MenuIcon, MenuItem } from "./Menu.styles";
import {
  Alien,
  GraduationCap,
  Planet,
  RocketLaunch,
  Trophy,
  Wrench,
} from "phosphor-react";

export function Menu() {
  return (
    <MenuContainer>
      <MenuBlockOne>
        <MenuItem>
          <MenuIcon>
            <Planet size={28} />
          </MenuIcon>
          <span>Base</span>
        </MenuItem>
        <MenuItem>
          <span>
            <GraduationCap size={28} />
          </span>
          <span>Piloto</span>
        </MenuItem>
        <MenuItem>
          <span>
            <RocketLaunch size={28} />
          </span>
          <span>Missões</span>
        </MenuItem>
        <MenuItem>
          <span>
            <Trophy size={28} />
          </span>
          <span>Conquistas</span>
        </MenuItem>
      </MenuBlockOne>

      <MenuBlockTwo>
        <MenuItem>
          <span>
            <Alien size={28} />
          </span>
          <span>Explorar</span>
        </MenuItem>

        <MenuItem>
          <span>
            <Wrench size={28} />
          </span>
          <span>Oficina</span>
        </MenuItem>
      </MenuBlockTwo>
    </MenuContainer>
  );
}
