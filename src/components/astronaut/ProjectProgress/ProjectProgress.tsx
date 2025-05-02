import {
  ProjectProgressAlert,
  ProjectProgressContainer,
  ProjectProgressContent,
  ProjectProgressCritical,
  ProjectProgressDefault,
  ProjectProgressSuccess,
} from "./ProjectProgress.styles";

import gameData from "../../../assets/db/dbgame.json";

export function ProjectProgress() {

  const limitedProjects = gameData.Projetos.slice(0, 4);

  return (
    <>
      <ProjectProgressContainer>
        {limitedProjects.map((projeto) => {
          let ProgressBar = ProjectProgressCritical;
          if (projeto.Progresso >= 50 && projeto.Progresso <= 79) {
            ProgressBar = ProjectProgressAlert;
          } else if (projeto.Progresso >= 80) {
            ProgressBar = ProjectProgressSuccess;
          }

          return (
            <ProjectProgressContent key={projeto.Id}>
              <ProjectProgressDefault>
                <ProgressBar progress={projeto.Progresso}>
                  <span>{projeto.Nome}</span>
                </ProgressBar>
              </ProjectProgressDefault>
              <div>
                <span>{projeto.Progresso.toFixed(0)}%</span>
              </div>
            </ProjectProgressContent>
          );
        })}
      </ProjectProgressContainer>
    </>
  );
}
