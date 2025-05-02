import {
  ProjectProgressAlert,
  ProjectProgressContainer,
  ProjectProgressContent,
  ProjectProgressCritical,
  ProjectProgressDefault,
  ProjectProgressSuccess,
} from "./ProjectProgress.styles";

import gameData from "../../../assets/db/dbgame.json";
import { useEffect, useState } from "react";

interface ProjectProgressProps {
  selectedFilter: string;
}

interface Project {
  Id: number;
  Nome: string;
  Progresso: number;
  Data_Inicio: string;
}

export function ProjectProgress({ selectedFilter }: ProjectProgressProps) {
  const sortedProjects = [...gameData.Projetos].sort(
    (a: Project, b: Project) => {
      switch (selectedFilter) {
        case "critical":
          return a.Progresso - b.Progresso;
        case "recent":
          return (
            new Date(b.Data_Inicio).getTime() -
            new Date(a.Data_Inicio).getTime()
          );
        case "oldest":
          return (
            new Date(a.Data_Inicio).getTime() -
            new Date(b.Data_Inicio).getTime()
          );
        default:
          return a.Progresso - b.Progresso;
      }
    }
  );

  const limitedProjects = sortedProjects;

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
    return () => setAnimate(false);
  }, []);

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
                <ProgressBar progress={projeto.Progresso} animate={animate}>
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
