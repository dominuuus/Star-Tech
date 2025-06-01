import styled from "styled-components";

interface ProgressProps {
  $width: number;
  $background: number;
}

export const MissionDetailsContainer = styled.div`
  padding: 0 2rem;
  border-radius: 20px;
  background-color: inherit;
`;

export const MissionDetailsContent = styled.div`
  background-color: white;
  padding-top: 30px;
  background-color: inherit;
`;

export const MissionDetailsHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const MissionTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;
export const MissionDeadLine = styled.div`
  font-size: ${(props) => props.theme.fontSize.medium};
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
    font-size: ${(props) => props.theme.fontSize.medium};
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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ProgressContainerHead = styled.div``;

export const ProgressMissionBarInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h4.Percentual {
    padding-left: 15px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;

    .Percentual {
      display: none;
    }
  }
`;
export const ProgressMissionBar = styled.div`
  background-color: ${(props) => props.theme.colors.gray.lighter};
  border-radius: 30px;
  width: 50%;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
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
    font-size: ${(props) => props.theme.fontSize.medium};
  }

  span {
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: bold;
  }
`;

export const RewardsContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.gray.light};
  padding: 1rem 2rem 4rem 2rem;
  margin: 2rem 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 1rem;
    margin: 1rem;
  }
`;

export const RewardsCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const RewardCardEstelar = styled.div`
  background-color: ${(props) =>
    props.theme.colors.mission.achievementBlockMission};
  width: 40%;
  display: flex;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const RewardEstelarPhoto = styled.div`
  width: 40%;
  height: 100px;
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
  width: 55%;
  display: flex;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const RewardCardMedalPhoto = styled.div`
  width: 40%;
  height: 100px;
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
  padding: 10px;
  h4 {
    font-size: ${(props) => props.theme.fontSize.medium};
  }
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
