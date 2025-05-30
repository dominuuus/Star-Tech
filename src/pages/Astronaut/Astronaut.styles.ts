import styled from "styled-components";

export const AstronautContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AstronautSectionTwo = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const AstronautSectionOne = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
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
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
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
`;

export const SectionTwoContentThree = styled.div`
  width: 45%;
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
