import {
  AvatarCircle,
  EditAvatar,
  EditAvatarContent,
  MascotsAndAchievements,
  OrbitRing,
  PlanetAndCredentials,
  Profile,
  SmallUserProfile,
  TightAvatarContainer,
} from "./EditProfile.styles";
import { PencilSimpleLine, UserCircleGear } from "phosphor-react";

export function EditProfile() {
  return (
    <>
      <Profile>
        <PlanetAndCredentials>
          <span>Planeta atual</span>
          <span>Suas Credenciais</span>
        </PlanetAndCredentials>
        <TightAvatarContainer>
          <AvatarCircle>
            <SmallUserProfile />
            <OrbitRing>
              <span className="planet p1" />
              <span className="planet p2" />
            </OrbitRing>
          </AvatarCircle>

          <EditAvatarContent>
            <EditAvatar>
              <PencilSimpleLine size={22} />
              <span>Editar</span>
            </EditAvatar>
            <EditAvatar>
              <UserCircleGear size={32} />
              <span>Personalizar</span>
            </EditAvatar>
          </EditAvatarContent>
        </TightAvatarContainer>
        <MascotsAndAchievements>
          <span>Mascotes</span>
          <span>Conquistas</span>
        </MascotsAndAchievements>
      </Profile>
    </>
  );
}
