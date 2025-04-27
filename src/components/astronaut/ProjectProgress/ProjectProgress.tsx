import {
  ProjectProgressAlert,
  ProjectProgressContainer,
  ProjectProgressCritical,
  ProjectProgressDefault,
  ProjectProgressSuccess,
} from "./ProjectProgress.styled";

export function ProjectProgress() {
  return (
    <>
      <ProjectProgressContainer>
        <ProjectProgressDefault>
          <ProjectProgressCritical>
            <span>Projeto 1</span>
          </ProjectProgressCritical>
        </ProjectProgressDefault>
        <div>
          <span>30%</span>
        </div>
      </ProjectProgressContainer>
      <ProjectProgressContainer>
        <ProjectProgressDefault>
          <ProjectProgressAlert>
            <span>Projeto 3</span>
          </ProjectProgressAlert>
        </ProjectProgressDefault>
        <div>
          <span>50%</span>
        </div>
      </ProjectProgressContainer>
      <ProjectProgressContainer>
        <ProjectProgressDefault>
          <ProjectProgressSuccess>
            <span>Projeto 6</span>
          </ProjectProgressSuccess>
        </ProjectProgressDefault>
        <div>
          <span>80%</span>
        </div>
      </ProjectProgressContainer>
    </>
  );
}
