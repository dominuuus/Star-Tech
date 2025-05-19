// src/pages/EditProfile/EditProfile.tsx
import React, { useState } from "react";
import {
  PencilSimpleLine,
  UserCircleGear,
  CurrencyCircleDollar,
} from "phosphor-react";
import Modal from "./ModalProfile";
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
} from "./EditProfile.styles";

export function EditProfile() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {/* --- Conteúdo principal da página/section --- */}
      <Profile>
        <PlanetAndCredentials>
          <span>Planeta atual</span>
          <span>Suas Credenciais</span>
        </PlanetAndCredentials>

        <AvatarContainer>
          <AvatarCircle>
            {/* painéis de ação */}
            <ActionPanel>
              <ActionButton>
                <PencilSimpleLine size={18} />
                Editar
              </ActionButton>

              <ActionButton>
                <UserCircleGear size={22} />
                Personalizar
              </ActionButton>
            </ActionPanel>

            {/* saldo estelar */}
            <EstelarBalance>
              <CurrencyCircleDollar size={22} weight="fill" />
              <p>: 280 Est.</p>
            </EstelarBalance>

            {/* avatar */}
            <img src={images.astronaut1} alt="Astronauta" />

            {/* botão Status → abre modal */}
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

            {/* anel/órbita */}
            <OrbitRing>
              <span className="planet p1" />
              <span className="planet p2" />
            </OrbitRing>
          </AvatarCircle>
        </AvatarContainer>

        <MascotsAndAchievements>
          <span>Mascotes</span>
          <span>Conquistas</span>
        </MascotsAndAchievements>
      </Profile>

      {/* --- Modal de Status reutilizável --- */}
      <Modal open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2>Seu status</h2>
        <p>Aqui você pode ver detalhes sobre o seu nível, XP, conquistas...</p>

        <button onClick={() => setIsPopupOpen(false)}>Fechar</button>
      </Modal>
    </>
  );
}
