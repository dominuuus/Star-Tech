import styled from "styled-components";

export const MissionContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  background-color: inherit;
`;

export const SectionFilter = styled.section`
  width: 30%;
  padding: 1rem;
  border-radius: 1rem;
`;

export const SectionMissionDetails = styled.section`
  width: 40%;
  min-width: 44rem;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.gray.light};
  border-radius: 1rem;
`;

export const SectionMissionNotifications = styled.div`
  width: 30%;
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: 0.2rem;
  border-radius: 1rem;
  height: fit-content;
`;
