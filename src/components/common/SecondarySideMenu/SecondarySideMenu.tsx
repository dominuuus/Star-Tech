import { MenuBlockOne, MenuBlockTwo, MenuContainer, MenuItem } from "./SecondarySideMenu.styles";
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
          <span>
            <RocketLaunch size={28} weight="fill"/>
          </span>
          <span>Nave</span>
        </MenuItem>
        <MenuItem>
          <span>
            <User size={28} weight="fill" />
          </span>
          <span>Piloto</span>
        </MenuItem>
        <MenuItem>
          <span>
          <Lightning size={32} weight="fill" />
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
            <Planet size={28} weight="fill"/>
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
