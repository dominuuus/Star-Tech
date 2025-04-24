import { MenuStats, ProjectProgressBar, SquadStatsContainer } from "./ProjectStatusCard.styles";

export function SquadStats() {
  return (
    <SquadStatsContainer>
      <p>Estatísticas</p>
      <hr />
        <MenuStats>
          <button>Mais críticos</button>
          <button>Mais recentes</button>
          <button>Mais antigos</button>
        </MenuStats>

        <ProjectProgressBar>
          <progress value={10} max={100} />
          <progress value={20} max={100} />
          <progress value={30} max={100} />
          <progress value={50} max={100} />
          <progress value={90} max={100} />
          <progress value={100} max={100} />
        </ProjectProgressBar>
    </SquadStatsContainer>
  );
}