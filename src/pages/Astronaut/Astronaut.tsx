import { useState } from "react";
import { MissionCard } from "./components/MissionCard/MissionCard";
import { MissionFilterCard } from "./components/MissionFilterCard/MissionFilterCard";
import { ProjectStatusCard } from "./components/ProjectStatusCard/ProjectStatusCard";
import { UserProfile } from "../../components/common/UserProfile/UserProfile";
import {
  AchievementContainer,
  AstronautContainer,
  AstronautSectionOne,
  AstronautSectionTwo,
  CommandCenterContent,
  MascotAchieveNewsContainer,
  MascotContainer,
  MissionCardContainer,
  MissionFilterContainer,
  MissionStatusContent,
  SectionTwoContentOne,
  SectionTwoContentThree,
  SectionTwoContentTwo,
  Title,
} from "./Astronaut.styles";
import { MascotPage } from "../../components/common/MascotModal/MascotModal";
import { AchievementPage } from "../../components/common/AchievementModal/AchievementModal";

export function Astronaut() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  return (
    <AstronautContainer>
      <AstronautSectionOne>
        <UserProfile />
      </AstronautSectionOne>

      <AstronautSectionTwo>
        <SectionTwoContentOne>
          <MascotAchieveNewsContainer>
            <MascotContainer>
              <div>
                <Title>Mascotes</Title>
              </div>
              <MascotPage />
            </MascotContainer>
            <AchievementContainer>
              <div>
                <Title>Conquistas</Title>
              </div>
              <AchievementPage />
            </AchievementContainer>
          </MascotAchieveNewsContainer>
          <div>
            <SectionTwoContentTwo>
              <CommandCenterContent>
                <ProjectStatusCard />
              </CommandCenterContent>
            </SectionTwoContentTwo>
          </div>
        </SectionTwoContentOne>

        <SectionTwoContentThree>
          <MissionStatusContent>
            <Title>🛰️Radar de transmissões</Title>
            <MissionFilterContainer>
              <MissionFilterCard
                selectedFilter={selectedFilter}
                onFilterChange={setSelectedFilter}
              />
            </MissionFilterContainer>
            <MissionCardContainer>
              <MissionCard selectedFilter={selectedFilter} />
            </MissionCardContainer>
          </MissionStatusContent>
        </SectionTwoContentThree>
      </AstronautSectionTwo>
    </AstronautContainer>
  );
}
