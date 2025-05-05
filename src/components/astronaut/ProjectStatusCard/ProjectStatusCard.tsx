import { useState } from "react";
import { ProjectProgress } from "../ProjectProgress/ProjectProgress";
import { ButtonStatus, MenuStats, ProjectProgressBar, SquadStatsContainer } from "./ProjectStatusCard.styles";

export function ProjectStatusCard() {

  const [selectedFilter, setSelectedFilter] = useState<string>('critical');

  return (
    <SquadStatsContainer>
        <MenuStats>
          <ButtonStatus $isSelected={selectedFilter === 'critical'}
          onClick={() => setSelectedFilter('critical')}>Mais críticos</ButtonStatus>
          <ButtonStatus $isSelected={selectedFilter === 'recent'}
          onClick={() => setSelectedFilter('recent')}>Mais recentes</ButtonStatus>
          <ButtonStatus $isSelected={selectedFilter === 'oldest'}
          onClick={() => setSelectedFilter('oldest')}>Mais antigos</ButtonStatus>
        </MenuStats>

        <ProjectProgressBar>
          <ProjectProgress selectedFilter={selectedFilter}/>
        </ProjectProgressBar>
    </SquadStatsContainer>
  );
}