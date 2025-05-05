import {
  ProjectProgressAlert,
  ProjectProgressContainer,
  ProjectProgressContent,
  ProjectProgressCritical,
  ProjectProgressDefault,
  ProjectProgressSuccess,
} from "./ProjectProgress.styles";

import { useEffect, useState } from "react";
import { fetchProject, Project } from "../../../services/projectService";

interface ProjectProgressProps {
  selectedFilter: string;
}

export function ProjectProgress({ selectedFilter }: ProjectProgressProps) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProject().then(setProjects).catch(console.error);
  }, []);

  const sortedProjects = [...projects].sort((a: Project, b: Project) => {
    switch (selectedFilter) {
      case "critical":
        return a.Progresso - b.Progresso;
      case "recent":
        return (
          new Date(b.Data_Início).getTime() - new Date(a.Data_Início).getTime()
        );
      case "oldest":
        return (
          new Date(a.Data_Início).getTime() - new Date(b.Data_Início).getTime()
        );
      default:
        return a.Progresso - b.Progresso;
    }
  });

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
                <ProgressBar $progress={projeto.Progresso} $animate={animate}>
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
