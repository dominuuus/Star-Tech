import { ProjectProgress } from "../ProjectProgress/ProjectProgress";
import { MenuStats, ProjectProgressBar, SquadStatsContainer } from "./ProjectStatusCard.styles";

export function ProjectStatusCard() {
  return (
    <SquadStatsContainer>
        <MenuStats>
          <button>Mais críticos</button>
          <button>Mais recentes</button>
          <button>Mais antigos</button>
        </MenuStats>

        <ProjectProgressBar>
          <ProjectProgress/>
        </ProjectProgressBar>
    </SquadStatsContainer>
  );
}