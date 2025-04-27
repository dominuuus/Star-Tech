import {
  ProjectProgressAlert,
  ProjectProgressContainer,
  ProjectProgressCritical,
  ProjectProgressDefault,
  ProjectProgressSuccess,
} from "./ProjectProgress.styles";

export function ProjectProgress() {
  return (
    <>
      <ProjectProgressContainer>
        <ProjectProgressDefault>
          <ProjectProgressCritical>
            <span>Projeto 2</span>
          </ProjectProgressCritical>
        </ProjectProgressDefault>
        <div>
          <span>30%</span>
        </div>
      </ProjectProgressContainer>
      <ProjectProgressContainer>
        <ProjectProgressDefault>
          <ProjectProgressAlert>
            <span>Projeto 4</span>
          </ProjectProgressAlert>
        </ProjectProgressDefault>
        <div>
          <span>50%</span>
        </div>
      </ProjectProgressContainer>
      <ProjectProgressContainer>
        <ProjectProgressDefault>
          <ProjectProgressSuccess>
            <span>Projeto 1</span>
          </ProjectProgressSuccess>
        </ProjectProgressDefault>
        <div>
          <span>80%</span>
        </div>
      </ProjectProgressContainer>

      <ProjectProgressContainer>
        <ProjectProgressDefault>
          <ProjectProgressSuccess>
            <span>Projeto 2</span>
          </ProjectProgressSuccess>
        </ProjectProgressDefault>
        <div>
          <span>81%</span>
        </div>
      </ProjectProgressContainer>
    </>
  );
}
