import styled from "styled-components";

export const AstronautContainer = styled.main`
  display: flex;
  margin-bottom: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    max-width: 80vw;
    height: 135rem;
  }
`;

export const AstronautSectionTwo = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const AstronautSectionOne = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 20%;
    margin-left: 40%;
  }
`;

export const SectionTwoContentOne = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.5rem;
  width: 50%;
`;

export const MascotAchieveNewsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.span`
  font-size: bold;
`;

export const SectionTwoContentTwo = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  border-radius: 1rem;
  padding: 2.5rem;

  p {
    font-size: ${(props) => props.theme.fontSize.medium};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const SectionTwoContentThree = styled.div`
  width: 45%;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const MissionStatusContent = styled.div`
  display: flex;
  flex-direction: column;
  background: inherit;
  height: 45rem;
  border-radius: 0.75rem;
  padding: 3rem;
  gap: 1.2rem;
  overflow: auto;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-top: 2rem;
    height: 80rem;
    padding: 1rem;
  }
`;

export const MissionFilterContainer = styled.div``;

export const MissionCardContainer = styled.div`
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.gray.light};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.news};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.news};
  }
`;

export const CommandCenterContent = styled.div`
  height: 20rem;
  border-radius: 0.75rem;
  height: 26rem;
`;

export const MascotContainer = styled.div`
  border-radius: 0.75rem;
  padding: 1rem;

  img {
    height: 4rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.35);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    img {
      height: 8rem;
    }
  }
`;

export const AchievementContainer = styled.div`
  border-radius: 0.75rem;
  padding: 1rem 1rem 1rem 0;
  max-height: 4rem;

  img {
    height: 3.5rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.35);
    }
  }
`;
