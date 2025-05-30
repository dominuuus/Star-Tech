import styled from "styled-components";

export const MissionContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  background-color: inherit;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const SectionFilter = styled.section`
  width: 30%;
  padding: 1rem;
  border-radius: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 80vw;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 80vw;
  }
`;

export const SectionMissionDetails = styled.section`
  width: 40%;
  min-width: 44rem;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.gray.light};
  border-radius: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 80vw;
    min-width: 10rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 80vw;
    min-width: 10rem;
  }
`;

export const SectionMissionNotifications = styled.div`
  width: 30%;
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: 0.2rem;
  border-radius: 1rem;
  height: fit-content;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;
