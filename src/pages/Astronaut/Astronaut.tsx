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
              <span>Mascote</span>
            </MascotContent>
            <AchievementContent>
              <span>Conquistas</span>
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
