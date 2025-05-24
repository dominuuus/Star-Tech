import { useState } from "react";
import { MissionCard } from "./components/MissionCard/MissionCard";
import { MissionFilterCard } from "./components/MissionFilterCard/MissionFilterCard";
import { ProjectStatusCard } from "./components/ProjectStatusCard/ProjectStatusCard";
import { NewsMission } from "../../components/common/NewsMission/NewsMission";
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
  NewsContent,
  SectionTwoContentOne,
  SectionTwoContentTwo,
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
                <span>Mascotes</span>
              </div>
              <MascotPage />
            </MascotContainer>
            <AchievementContainer>
              <div>
                <span>Conquistas</span>
              </div>
              <AchievementPage />
            </AchievementContainer>
          </MascotAchieveNewsContainer>

          <NewsContent>
            <NewsMission tipo="Usuário" maxItems={4} />
          </NewsContent>
        </SectionTwoContentOne>

        <SectionTwoContentTwo>
          <div>
            <span>Central de Comando</span>
            <p>Projetos</p>
            <CommandCenterContent>
              <ProjectStatusCard />
            </CommandCenterContent>
          </div>

          <div>
            <MissionStatusContent>
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
          </div>
        </SectionTwoContentTwo>
      </AstronautSectionTwo>
    </AstronautContainer>
  );
}
