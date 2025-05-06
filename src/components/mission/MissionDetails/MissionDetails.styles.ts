import styled from "styled-components";

export const MissionDetailsContainer = styled.div``;

export const MissionDetailsContent = styled.div`
  background-color: white;
  padding-top: 30px;
  padding-bottom: 300px;
`;

export const MissionDetailsHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
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
  justify-content: flex-end;
`;
export const MissionDetailsBody = styled.div`
  gap: 100px;
  h4 {
    font-weight: bold;
  }
  p {
    font-size: 10px;
  }
`;
export const MissionTechnicalObjectiveContainer = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const MissionDescription = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const ProgressContainer = styled.div`
  padding-bottom: 25px;
`;
export const ProgressContainerHead = styled.div`
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

export const RewardsContainer = styled.div`
  h4.Reward {
    padding-bottom: 7px;
  }
`;
export const RewardsCards = styled.div`
  display: flex;
  gap: 45px;
  padding-bottom: 100px;
`;

export const RewardCardEstelar = styled.div`
  background-color: ${(props) =>
    props.theme.colors.mission.achievementBlockMission};
  width: 40%;
  display: flex;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;
  h4 {
    padding-left: 15px;
  }
`;

export const RewardEstelarPhoto = styled.div`
  background-color: ${(props) => props.theme.colors.mission.coinMission};
  width: 30%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  img {
    height: 3.5rem;
    width: 3.8rem;
  }
`;

export const RewardCardMedal = styled.div`
  background-color: ${(props) =>
    props.theme.colors.mission.achievementBlockMission};
  width: 40%;
  display: flex;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  text-align: justify;
`;

export const RewardCardMedalPhoto = styled.div`
  background-color: ${(props) => props.theme.colors.mission.achievementMission};
  width: 38%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  img {
    height: 4rem;
    width: 4rem;
  }
`;

export const RewardCardMedalText = styled.div`
  padding-top: 5px;
  padding-left: 15px;
  h4 {
    font-size: 13px;
  }
  padding-right: 15px;
`;

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
