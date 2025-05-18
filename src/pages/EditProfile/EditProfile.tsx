import { UserProfile } from "../../components/common/UserProfile/UserProfile";
import {
  EditAvatar,
  EditAvatarContent,
  Profile,
  TightAvatarContainer,
} from "./EditProfile.styles";
import { PencilSimpleLine, UserCircleGear } from "phosphor-react";

export function EditProfile() {
  return (
    <>
      <Profile>
        <TightAvatarContainer>
          <UserProfile></UserProfile>
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
        <div></div>
        <div></div>
      </Profile>
    </>
  );
}
