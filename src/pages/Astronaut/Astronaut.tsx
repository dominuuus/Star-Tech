import { useState } from "react";
import achievements from "../../assets/achievements";
import mascotes from "../../assets/mascots";
import { MissionCard } from "../../components/astronaut/MissionCard/MissionCard";
import { MissionFilterCard } from "../../components/astronaut/MissionFilterCard/MissionFilterCard";
import { ProjectStatusCard } from "../../components/astronaut/ProjectStatusCard/ProjectStatusCard";
import { SpaceshipCard } from "../../components/astronaut/SpaceshipCard/SpaceshipCard";
import { NewsMission } from "../../components/common/NewsMission/NewsMission";
import { UserProfile } from "../UserProfile/UserProfile";
import {
  AchievementContent,
  AstronautContainer,
  AstronautSectionOne,
  AstronautSectionTwo,
  CloseModalButton,
  CommandCenterContent,
  FavoriteModalButton,
  MascotAchieveNewsContainer,
  MascotContent,
  MascotDescriptionContainer,
  MissionStatusContent,
  ModalButtons,
  ModalContentDescription,
  ModalContentInfo,
  ModalContentWrapper,
  NewsContent,
  SectionTwoContentOne,
  SectionTwoContentTwo,
  SpaceshipContent,
} from "./Astronaut.styles";
import { MascotModal } from "../../components/common/MascotModal/MascotModal";
import { AchievementModal } from "../../components/common/AchievementModal/AchievementModal";

export function Astronaut() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openMascotModal = () => setIsModalOpen(true);
  const closeMascotModal = () => setIsModalOpen(false);

  const [isAchievementOpen, setIsAchievementOpen] = useState(false);
  const openAchievementModal = () => setIsAchievementOpen(true);
  const closeAchievementMascotModal = () => setIsAchievementOpen(false);

  return (
    <AstronautContainer>
      <AstronautSectionOne>
        <UserProfile />
      </AstronautSectionOne>

      <AstronautSectionTwo>
        <SectionTwoContentOne>
          <MascotAchieveNewsContainer>

            <MascotContent>
              <img src={mascotes.algorix} alt="" onClick={openMascotModal} />
              <MascotModal isOpen={isModalOpen} onClose={closeMascotModal}>
                <ModalContentWrapper>
                  <ModalContentInfo>
                    <img src={mascotes.algorix} alt="" onClick={openMascotModal} />
                    <span>Algorix</span>
                  </ModalContentInfo>
                  <ModalContentDescription>
                    <MascotDescriptionContainer>
                      <h1>O estrategista de código</h1>
                      <h2>
                        Um ser geométrico que flutua suavemente, sempre
                        calculando o caminho mais eficiente. Sua mente funciona
                        como um algoritmo vivo, otimizando tudo ao seu redor.
                      </h2>
                      <h3>Personalidade</h3>
                      <span>
                        Racional, paciente e estratégico. Fala em padrões
                        lógicos e adora resolver problemas complexos.
                      </span>
                      <h3>Habilidade especial</h3>
                      <span>
                        Identifica redundâncias em códigos e sugere estruturas
                        mais eficientes.
                      </span>

                      <ModalButtons>
                        <FavoriteModalButton>
                          Remover dos favoritos
                        </FavoriteModalButton>
                        <CloseModalButton onClick={closeMascotModal}>
                          Fechar
                        </CloseModalButton>
                      </ModalButtons>
                    </MascotDescriptionContainer>
                  </ModalContentDescription>
                </ModalContentWrapper>
              </MascotModal>
              <img src={mascotes.buggo} alt="" />
              <img src={mascotes.astroli} alt="" />
              <img src={mascotes.bytee} alt="" />
              <img src={mascotes.cachee} alt="" />
              <img src={mascotes.patch} alt="" />
              <img src={mascotes.cometin} alt="" />
              <img src={mascotes.galaxito} alt="" />
              <img src={mascotes.pluxi} alt="" />
              <img src={mascotes.floris} alt="" />
            </MascotContent>
          
            <AchievementContent>
              <img src={achievements.ferroVermelho} alt="" onClick={openAchievementModal}/>
              <AchievementModal isAchievementOpen={isAchievementOpen} onAchievementClose={closeAchievementMascotModal}>
                <ModalContentWrapper>
                  <ModalContentInfo>
                    <img src={achievements.ferroVermelho} alt="" onClick={openAchievementModal} />
                  </ModalContentInfo>
                  <ModalContentDescription>
                    <MascotDescriptionContainer>
                      <h1>Ferro Vermelho</h1>
                      <h2>
                      Entregar 5 tarefas vermelhas antes do prazo
                      </h2>
                      <h3>Planeta</h3>
                      <span>
                        Racional, paciente e estratégico. Fala em padrões
                        lógicos e adora resolver problemas complexos.
                      </span>

                      <ModalButtons>
                       <CloseModalButton onClick={closeAchievementMascotModal}>
                          Fechar
                        </CloseModalButton>
                      </ModalButtons>
                    </MascotDescriptionContainer>
                  </ModalContentDescription>
                </ModalContentWrapper>
              </AchievementModal>
              <img src={achievements.exploradorDeSolido} alt="" />
              <img src={achievements.fundadorDaFrota} alt="" />
              <img src={achievements.raizSolida} alt="" />
            </AchievementContent>
            <NewsContent>
              <NewsMission />
            </NewsContent>
          </MascotAchieveNewsContainer>

          <SpaceshipContent>
            <SpaceshipCard />
          </SpaceshipContent>
        </SectionTwoContentOne>

        <SectionTwoContentTwo>
          <div>
            <span>Central de Comando</span>
            <hr />
            <CommandCenterContent>
              <ProjectStatusCard />
            </CommandCenterContent>
          </div>

          <div>
            <span>Status das missões</span>
            <hr />
            <MissionStatusContent>
              <MissionFilterCard />
              <MissionCard />
            </MissionStatusContent>
          </div>
        </SectionTwoContentTwo>
      </AstronautSectionTwo>
    </AstronautContainer>
  );
}
