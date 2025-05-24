// src/pages/EditProfile/EditProfile.tsx
import { useState } from "react";
import {
  PencilSimpleLine,
  UserCircleGear,
  CurrencyCircleDollar,
} from "phosphor-react";
import images from "../../assets/images";

import {
  Profile,
  PlanetAndCredentials,
  MascotsAndAchievements,
  AvatarContainer,
  AvatarCircle,
  ActionPanel,
  ActionButton,
  OrbitRing,
  EstelarBalance,
  Status as StyledStatus,
  MascotsTitle,
  PlanetTitle,
  CredentialTitle,
  CredentialContent,
  CredentialContent2,
} from "./EditProfile.styles";
import planets from "../../assets/planets";
import ModalProfile from "./components/ModalProfile";
import { NavLink } from "react-router-dom";

export function EditProfile() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <Profile>
        <PlanetAndCredentials>
          <PlanetTitle>
            <span>Planeta atual</span>
            <img src={planets.aeris} alt="" />
            <span>Aeris</span>
          </PlanetTitle>
          <CredentialTitle>
            <span>Suas Credenciais</span>
            <CredentialContent>
              <ActionButton>
                <span>Codestar-1</span>
              </ActionButton>
              <ActionButton>
                <span>Carteira Digital</span>
              </ActionButton>
              <ActionButton>
                <span>BB Financiamento</span>
              </ActionButton>
            </CredentialContent>
            <CredentialContent2>
              <ActionButton>
                <span>BB Crédito</span>
              </ActionButton>
              <ActionButton>
                <span>Acessibilidade App</span>
              </ActionButton>
              <ActionButton>
                <span>TeamMaiaraPires</span>
              </ActionButton>
            </CredentialContent2>
          </CredentialTitle>
        </PlanetAndCredentials>
        <AvatarContainer>
          <AvatarCircle>
            <ActionPanel>
              <ActionButton>
                <PencilSimpleLine size={18} />
                Editar
              </ActionButton>

              <ActionButton>
                <UserCircleGear size={22} />
                <NavLink to="/game/avatar" title="Avatar">
                        Personalizar
                    </NavLink> 
              </ActionButton>
            </ActionPanel>

            <EstelarBalance>
              <CurrencyCircleDollar size={22} weight="fill" />
              <p>: 1000 Est.</p>
            </EstelarBalance>

            <img src={images.astronaut1} alt="Astronauta" />

            <StyledStatus
              role="button"
              tabIndex={0}
              onClick={() => setIsPopupOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setIsPopupOpen(true);
              }}
            >
              <span>Status</span>
            </StyledStatus>
            <OrbitRing>
              <span className="planet p1" />
              <span className="planet p2" />
            </OrbitRing>
          </AvatarCircle>
        </AvatarContainer>
        <MascotsAndAchievements>
          <MascotsTitle>
            <span>Mascotes</span>
            <img src={images.MascotsIcone} alt="" />
          </MascotsTitle>
          <span>Conquistas</span>
          <img src={images.conquistas} alt="" />
        </MascotsAndAchievements>
      </Profile>

      <ModalProfile open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2>Seu status</h2>
        <p>Aqui você pode ver detalhes sobre o seu nível, XP, conquistas...</p>

        <button onClick={() => setIsPopupOpen(false)}>Fechar</button>
      </ModalProfile>
    </>
  );
}
