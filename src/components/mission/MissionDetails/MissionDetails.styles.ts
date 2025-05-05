import styled from "styled-components";

export const MissionDetailsContainer = styled.div``;

export const MissionDetailsContent = styled.div`
  background-color: white;
  padding-top: 30px;
`;
export const MissionDetailsHead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 350px;
`;
export const MissionTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;
export const MissionDeadLine = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: column;
`;
export const MissionDetailsBody = styled.div`
  h4 {
    font-weight: bold;
  }
  h4.Progresso {
    padding-top: 90px;
  }
  li {
    padding-left: 30px;
  }
  p {
    font-size: 10px;
  }
`;
export const MissionDescription = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
`;
export const ProgressContainer = styled.div`
  padding-bottom: 25px;
`;
export const ProgressContainerHead = styled.div`
  p {
    padding-bottom: 10px;
  }
`;

export const ProgressMissionBarInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h4.Percentual {
    padding-left: 15px;
  }
`;
export const ProgressMissionBar = styled.div`
  background-color: ${(props) => props.theme.colors.gray.lighter};
  border-radius: 30px;
  width: 50%;
`;
interface ProgressProps {
  width: number;
  background: number;
}

export const TechLiderProfile = styled.div`
  padding-left: 150px;
  display: flex;
  flex-direction: row;
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  }
`;
export const TechLiderProfileText = styled.div`
  text-align: center;
  gap: -5px;
  p {
    font-weight: bold;
    color: ${(props) => props.theme.colors.techLeader};
  }
  h4 {
    font-size: 12px;
  }
  span {
    font-size: 12px;
  }
`;

export const RewardsContainer = styled.div `

`
export const RewardsCards = styled.div `
  background-color: ${(props) => props.theme.colors.mission.achievementBlockMission};
  width: 40%;
`

export const ProgressMissionBarContent = styled.div<ProgressProps>`
  padding: 0.75rem;
  border-radius: 30px;
  align-items: center;
  height: 3rem;
  width: ${(props) => props.width}%;
`;

export const ProjectProgressSuccess = styled(ProgressMissionBarContent)`
  background-color: ${(props) => props.theme.colors.status.green};
`;
export const ProjectProgressAlert = styled(ProgressMissionBarContent)`
  background-color: ${(props) => props.theme.colors.status.yellow};
`;
export const ProjectProgressCritical = styled(ProgressMissionBarContent)`
  background-color: ${(props) => props.theme.colors.status.red};
`;
