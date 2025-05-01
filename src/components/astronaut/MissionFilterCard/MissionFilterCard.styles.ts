
import styled from "styled-components";

export const MissionFilterCardContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const StatusMission = styled.div`
  border-radius: 30px;
  background: ${(props) => props.theme.colors.white};
  gap: 10px;
  display: flex;
  flex-direction: row;
  padding: 5px 15px 5px 15px;
  align-items: center;
  font-weight: bold;
  font-size: 0.65rem;

  p {
    font-weight: lighter;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
export const NumberStyle = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const StatusLateMission = styled.div`
  border-radius: 30px;
  background: ${(props) => props.theme.colors.white};
  gap: 15px;
  display: flex;
  flex-direction: row;
  padding: 5px 15px 5px 15px;
  font-weight: bold;
  align-items: center;
  font-size: 0.65rem;
  div {
    font-size: 2rem;
    font-weight: bold;
    color: red;
  }
`;
