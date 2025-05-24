import styled from "styled-components";

interface StatusProps {
  $isSelected?: boolean;
}

export const MissionFilterCardContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StatusMission = styled.div<StatusProps>`
  border-radius: 30px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  padding: 5px 15px 5px 15px;
  align-items: center;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.medium};

  box-shadow:
    3px 3px 5px rgba(0, 0, 0, 0.1),
    -1px -1px 2px rgba(255, 255, 255, 0.8);

  p {
    font-weight: lighter;
  }
  div {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const NumberStyle = styled.span`
  font-size: ${(props) => props.theme.fontSize.extraLarge};
  font-weight: bold;
`;

export const StatusLateMission = styled.div<StatusProps>`
  border-radius: 30px;
  background: ${(props) =>
    props.$isSelected ? props.theme.colors.tertiary : props.theme.colors.white};
  color: ${(props) =>
    props.$isSelected ? props.theme.colors.white : props.theme.colors.tertiary};
  gap: 15px;
  display: flex;
  flex-direction: row;
  padding: 5px 15px 5px 15px;
  font-weight: bold;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.medium};
  box-shadow:
    3px 3px 5px rgba(0, 0, 0, 0.1),
    1px 1px 2px rgba(255, 255, 255, 0.8);
  transition:
    color 0.15s,
    background-color 0.15s;

  div {
    font-size: ${(props) => props.theme.fontSize.extraLarge};
    font-weight: bold;
    color: ${(props) => props.theme.colors.status.red};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const StatusInProgressMission = styled(StatusMission)<StatusProps>`
  background: ${(props) =>
    props.$isSelected ? props.theme.colors.tertiary : props.theme.colors.white};
  color: ${(props) =>
    props.$isSelected ? props.theme.colors.white : props.theme.colors.tertiary};
`;

export const StatusDoneMission = styled(StatusMission)<StatusProps>`
  background: ${(props) =>
    props.$isSelected ? props.theme.colors.tertiary : props.theme.colors.white};
  color: ${(props) =>
    props.$isSelected ? props.theme.colors.white : props.theme.colors.tertiary};
`;
