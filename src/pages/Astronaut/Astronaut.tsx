import { AchievementStyle, AstronautContainer, AstronautSectionOne, AstronautSectionTwo, MascotAndAchievementContainer, MascotStyle, MissionStatusBar, MissionUpdatesStyle, SectionTwoStats, SectionTwoWelcome } from "./Astronaut.styles";
import images from "../../assets/images";
import { ProjectStatusCard } from "../../components/astronaut/ProjectStatusCard/ProjectStatusCard";
import { NewsMission } from "../../components/common/NewsMission/NewsMission";

export function Astronaut() {
  return (
    <AstronautContainer>
      <AstronautSectionOne>
        <div>
          <span>Nebula.dev</span>
        </div>
        <div>
          <img src={images.astronaut1} alt="" />
        </div>
      </AstronautSectionOne>

      <AstronautSectionTwo>
        <SectionTwoWelcome>
            <MascotAndAchievementContainer>
              <MascotStyle>
                  <span>Mascotes</span>
              </MascotStyle>
              <AchievementStyle>
                  <span>Conquistas</span>
              </AchievementStyle>
              <MissionUpdatesStyle>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquid accusamus quis necessitatibus.</span>
                <hr />
                <span>Cumque rerum doloribus voluptatem sit ducimus! Quam dolorem ad inventore aperiam dolores fugiat optio magnam accusamus eius.</span>
                <hr />
                <span>Cumque rerum doloribus voluptatem sit ducimus! Quam dolorem ad inventore aperiam dolores fugiat optio magnam accusamus eius.</span>
            </MissionUpdatesStyle>
            </MascotAndAchievementContainer>

        </SectionTwoWelcome>

        <SectionTwoStats>
              <ProjectStatusCard></ProjectStatusCard>
              <MissionStatusBar>
                <NewsMission/>
              </MissionStatusBar>
        </SectionTwoStats>

      </AstronautSectionTwo>

    </AstronautContainer>
  );
}
