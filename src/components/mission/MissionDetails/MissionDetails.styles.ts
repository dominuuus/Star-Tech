import styled from "styled-components";

interface ProgressProps {
  $width: number;
  $background: number;
}

export const MissionDetailsContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.gray.light};
  padding: 0 2rem;
  border-radius: 20px;
  box-shadow:
    2px 3px 3px rgba(0, 0, 0, 0.1),
    1px 1px 2px rgba(255, 255, 255, 0.8);
`;

export const MissionDetailsContent = styled.div`
  background-color: white;
  padding-top: 30px;
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

  li {
    margin-left: 10px;
    list-style: none;
  }
`;

export const MissionDescription = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const ProgressContainer = styled.div`
  padding-bottom: 25px;
`;
export const ProgressContainerHead = styled.div``;

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

export const TechLiderProfile = styled.div`
  padding-left: 50px;
  display: flex;
  flex-direction: row;
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  }
`;
export const TechLiderProfileText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  h4 {
    color: ${(props) => props.theme.colors.techLeader};
    font-size: 0.8rem;
  }

  span {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

export const RewardsContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.gray.light};
  padding: 1rem 2rem 4rem 2rem;
  margin: 2rem 1rem;
`;

export const RewardsCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
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
  width: ${(props) => props.$width}%;
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