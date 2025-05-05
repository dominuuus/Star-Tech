import styled from "styled-components";

export const AstronautContainer = styled.main`
  display: flex;
  margin-bottom: 2rem;
`;

export const AstronautSectionTwo = styled.section`
  display: flex;
  flex-direction: column;
`;

export const AstronautSectionOne = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SectionTwoContentOne = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const MascotAchieveNewsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const SectionTwoContentTwo = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4.5rem;

  span {
    font-weight: bold;
  }

  p {
    font-size: 0.75rem;
  }
`;

export const NewsContent = styled.div`
  width: 100%;
`;

export const MissionStatusContent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.gray.lighter};
  height: 26rem;
  border-radius: 0.75rem;
  padding: 1rem;
  gap: 1.2rem;
  margin-top: 20px;
`;

export const MissionFilterContainer = styled.div`

`;

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
    background: ${(props) => props.theme.colors.primary};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.primary};
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