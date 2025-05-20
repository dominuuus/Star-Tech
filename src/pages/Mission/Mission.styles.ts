import styled from "styled-components";

export const MissionContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  background-color: inherit;
`;

export const SectionFilter = styled.section`
  width: 30%;
  
`;

export const SectionMissionDetails = styled.section`
  width: 45%;
  min-width: 44rem;
  margin-bottom: 10px;
  height: fit-content;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.gray.light};
`;

export const SectionMissionNotifications = styled.div`
  width: 25%;
  div {
    background-color: ${(props) => props.theme.colors.news};
    height: fit-content;
    border-radius: 10px;
    margin-top: 10px;
  }
`;
