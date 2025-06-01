import { useState } from "react";
import planets from "../../assets/planets";
import { NewsMission } from "../../components/common/NewsMission/NewsMission";
import { PlanetModal } from "../../components/common/PlanetModal/PlanetModal";
import {
  CloseModalButton,
  ExploredPlanetContainer,
  MascotDescriptionContainer,
  MissionUpdatesContent,
  ModalButtons,
  ModalContentDescription,
  ModalContentInfo,
  ModalContentWrapper,
  SpaceshipCardContainer,
  SpaceshipContainer,
  SpaceshipContent,
  StyledCanvas,
} from "./Spaceship.styles";
import mascotes from "../../assets/mascots";
import achievements from "../../assets/achievements";
import { Codestar3D } from "../../components/3D/Codestar3D";
import { Html, OrbitControls } from "@react-three/drei";
import { UsersThree, PlusCircle } from "phosphor-react";
import { MissionCardModal } from "./components/MissionCardModal/MissionCardModal";
import { TripulationModal } from "./components/TripulationModal/TripulationModal";

export function Spaceship() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openPlanetModal = () => setIsModalOpen(true);
  const closePlanetModal = () => setIsModalOpen(false);
  const [isMissionModalOpen, setIsMissionModalOpen] = useState(false);

  const [isTripulationModalOpen, setIsTripulationModalOpen] = useState(false);

  const toggleTripulationModal = () => {
    setIsTripulationModalOpen((prev) => !prev);
  };

  const toggleMissionModal = () => {
    setIsMissionModalOpen((prev) => !prev);
  };
  return (
    <>
      <SpaceshipContainer>
        <div>
          <h1>Codestar-1</h1>
        </div>
        {isTripulationModalOpen && (
          <TripulationModal onClose={toggleTripulationModal} />
        )}
        {isMissionModalOpen && (
          <MissionCardModal
            missionName="Corrigir Acessibilidade no APP"
            onClose={toggleMissionModal}
          />
        )}
        <SpaceshipContent>
          <SpaceshipCardContainer>
            <StyledCanvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              style={{
                position: "absolute",
                zIndex: 0,
                width: "95vw",
              }}
            >
              <ambientLight intensity={3.5} />
              <spotLight position={[-20, 10, 10]} angle={0.15} penumbra={1} />
              <mesh>
                <Codestar3D />
              </mesh>
              <OrbitControls />

              <Html position={[-2.8, 0.2, 0]}>
                <button onClick={toggleTripulationModal}>
                  <UsersThree size={23} weight="bold" />
                  <span>Tripulação</span>
                </button>
              </Html>

              <Html position={[-2, -0.2, -1]}>
                <h4 onClick={toggleMissionModal}>
                  <PlusCircle size={20} weight="bold" />
                  <span>Corrigir Acessibilidade no APP</span>
                </h4>
              </Html>

              <Html position={[1, -0.6, 0]}>
                <h4 onClick={() => alert("Missão amarela da Codestar1!")}>
                  <PlusCircle size={20} weight="bold" />
                  <span>Adicionar Testes Unitários</span>
                </h4>
              </Html>

              <Html position={[0.7, 1, 0]}>
                <h3 onClick={() => alert("Missão vermelha Codestar1!")}>
                  <PlusCircle size={20} weight="bold" />
                  <span>Corrigir Falha de Segurança</span>
                </h3>
              </Html>
            </StyledCanvas>

            <ExploredPlanetContainer>
              <img src={planets.aeris} alt="" onClick={openPlanetModal} />
              <PlanetModal isOpen={isModalOpen} onClose={closePlanetModal}>
                <ModalContentWrapper>
                  <ModalContentInfo>
                    <img src={planets.aeris} alt="" onClick={openPlanetModal} />
                    <span>Aeris</span>
                  </ModalContentInfo>
                  <ModalContentDescription>
                    <MascotDescriptionContainer>
                      <h1>Aeris - Ilhas no Vento</h1>
                      <h2>Correção de Bugs</h2>
                      <span>
                        Mundo gasoso com ilhas flutuantes, criaturas planadoras
                        e desafios verticais. É o lar dos puzzles
                        tridimensionais e minigames de equilíbrio. Ideal para
                        caçadores de bugs e desenvolvedores que trabalham com
                        correções em áreas críticas.
                      </span>
                      <h5>Mascotes</h5>
                      <div>
                        <img src={mascotes.cometin} alt="" title="Cometin" />
                        <img src={mascotes.orby} alt="" title="Orby" />
                        <img src={mascotes.syntaxx} alt="" title="Syntaxx" />
                        <img src={mascotes.sinpz} alt="" title="Snipz" />
                      </div>

                      <h5>Conquistas</h5>
                      <div>
                        <img
                          src={achievements.exploradorDeSolido}
                          alt=""
                          title="Explorador de Sólido"
                        />
                        <img
                          src={achievements.fundadorDaFrota}
                          alt=""
                          title="Fundador da Frota"
                        />
                        <img
                          src={achievements.qualidadeConstante}
                          alt=""
                          title="Qualidade Constante"
                        />
                      </div>

                      <ModalButtons>
                        <CloseModalButton onClick={closePlanetModal}>
                          Fechar
                        </CloseModalButton>
                      </ModalButtons>
                    </MascotDescriptionContainer>
                  </ModalContentDescription>
                </ModalContentWrapper>
              </PlanetModal>
              <img src={planets.pyron} alt="" />
              <img src={planets.coreon} alt="" />
              <img src={planets.crystalia} alt="" />
              <img src={planets.verdax} alt="" />
            </ExploredPlanetContainer>

            <MissionUpdatesContent>
              <NewsMission tipo="Equipe" maxItems={6} />
            </MissionUpdatesContent>
          </SpaceshipCardContainer>
        </SpaceshipContent>
      </SpaceshipContainer>
    </>
  );
}
