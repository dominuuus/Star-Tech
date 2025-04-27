import achievements from "../../assets/achievements";
import mascotes from "../../assets/mascots";
import { MissionCard } from "../../components/astronaut/MissionCard/MissionCard";
import { MissionFilterCard } from "../../components/astronaut/MissionFilterCard/MissionFilterCard";
import { ProjectStatusCard } from "../../components/astronaut/ProjectStatusCard/ProjectStatusCard";
import { SpaceshipCard } from "../../components/astronaut/SpaceshipCard/SpaceshipCard";
import { NewsMission } from "../../components/common/NewsMission/NewsMission";
import { UserProfile } from "../UserProfile/UserProfile";
import { AchievementContent, AstronautContainer, AstronautSectionOne, AstronautSectionTwo, CommandCenterContent, MascotAchieveNewsContainer, MascotContent, MissionStatusContent, NewsContent, SectionTwoContentOne, SectionTwoContentTwo, SpaceshipContent } from "./Astronaut.styles";

export function Astronaut() {
  return (
    <AstronautContainer>
        <AstronautSectionOne>
          <UserProfile />
        </AstronautSectionOne>

        <AstronautSectionTwo>
        <SectionTwoContentOne>
          <MascotAchieveNewsContainer>
            <MascotContent>
              <img src={mascotes.algorix} alt="" />
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
              <img src={achievements.exploradorDeSolido} alt="" />
              <img src={achievements.ferroVermelho} alt="" />
              <img src={achievements.fundadorDaFrota} alt="" />
              <img src={achievements.raizSolida} alt="" />
            </AchievementContent>
            <NewsContent>
              <NewsMission/>
            </NewsContent>
          </MascotAchieveNewsContainer>

          <SpaceshipContent>
            <SpaceshipCard/>
          </SpaceshipContent>

        </SectionTwoContentOne>

        <SectionTwoContentTwo>
        <div>
            <span>Central de Comando</span>
            <hr />
            <CommandCenterContent>
              <ProjectStatusCard/>
            </CommandCenterContent>
        </div>

          <div>
          <span>Status das missões</span>
          <hr />
            <MissionStatusContent>
              <MissionFilterCard/>
              <MissionCard/>
            </MissionStatusContent>
          </div>

        </SectionTwoContentTwo>

      </AstronautSectionTwo>
    </AstronautContainer>
  );
}
