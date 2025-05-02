import styled from "styled-components";

export const ProjectProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProjectProgressContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    font-weight: bold;
    white-space: nowrap;
  }
`;

export const ProjectProgressDefault = styled.div`
  background-color: ${(props) => props.theme.colors.gray.lighter};
  border-radius: 30px;
  width: 90%;
`;

const ProjectProgressStatus = styled.div<{progress: number}>`
  padding: 0.75rem;
  border-radius: 30px;
  align-items: center;
  width: ${props => props.progress}%;
`;

export const ProjectProgressSuccess = styled(ProjectProgressStatus)`
  background-color: ${(props) => props.theme.colors.status.green};
`;
export const ProjectProgressAlert = styled(ProjectProgressStatus)`
  background-color: ${(props) => props.theme.colors.status.yellow};
`;
export const ProjectProgressCritical = styled(ProjectProgressStatus)`
  background-color: ${(props) => props.theme.colors.status.red};
`;
