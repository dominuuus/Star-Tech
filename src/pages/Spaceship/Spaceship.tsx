import { useState } from "react";
import images from "../../assets/images";
import planets from "../../assets/planets";
import { NewsMission } from "../../components/common/NewsMission/NewsMission";
import { PlanetModal } from "../../components/common/PlanetModal/PlanetModal";
import { CloseModalButton, ExploredPlanetContainer, MascotDescriptionContainer, MissionUpdatesContent, ModalButtons, ModalContentDescription, ModalContentInfo, ModalContentWrapper, SpaceshipCardContainer, SpaceshipContainer } from "./Spaceship.styles";
import mascotes from "../../assets/mascots";
import achievements from "../../assets/achievements";


export function Spaceship() {

      const [isModalOpen, setIsModalOpen] = useState(false);
      const openPlanetModal = () => setIsModalOpen(true);
      const closePlanetModal = () => setIsModalOpen(false);
      
    return (
        <>
        <SpaceshipContainer>
        <div>
            <div>
            <h1>Codestar-1</h1>
            <ExploredPlanetContainer>
                <img src={planets.aeris} alt="" onClick={openPlanetModal}/>
                <PlanetModal isOpen={isModalOpen} onClose={closePlanetModal}>
                                <ModalContentWrapper>
                                  <ModalContentInfo>
                                    <img
                                      src={planets.aeris}
                                      alt=""
                                      onClick={openPlanetModal}
                                    />
                                    <span>Aeris</span>
                                  </ModalContentInfo>
                                  <ModalContentDescription>
                                    <MascotDescriptionContainer>
                                      <h1>Aeris - Ilhas no Vento</h1>
                                      <h2>
                                      Correção de Bugs
                                      </h2>
                                      <span>
                                      Mundo gasoso com ilhas flutuantes, criaturas planadoras e desafios verticais. É o lar dos puzzles tridimensionais e minigames de equilíbrio. Ideal para caçadores de bugs e desenvolvedores que trabalham com correções em áreas críticas.
                                      </span>
                                      <h3>Mascotes</h3>
                                      <div>
                                        <img src={mascotes.cometin} alt="" title="Cometin"/>
                                        <img src={mascotes.orby} alt="" title="Orby"/>
                                        <img src={mascotes.syntaxx} alt="" title="Syntaxx"/>
                                        <img src={mascotes.sinpz} alt="" title="Snipz"/>
                                      </div>

                                      <h3>Conquistas</h3>
                                      <div>
                                        <img src={achievements.exploradorDeSolido} alt="" title="Explorador de Sólido"/>
                                        <img src={achievements.fundadorDaFrota} alt="" title="Fundador da Frota"/>
                                        <img src={achievements.qualidadeConstante} alt="" title="Qualidade Constante"/>
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
            </div>
            <SpaceshipCardContainer>
                <img src={images.nave} alt="" />
            </SpaceshipCardContainer>
        </div>

        <MissionUpdatesContent>
            <NewsMission/>
        </MissionUpdatesContent>


        </SpaceshipContainer>
        </>
    )
}