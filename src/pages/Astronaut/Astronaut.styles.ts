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

export const MascotContent = styled.div`
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

export const AchievementContent = styled.div`
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

export const ModalTitle = styled.h2`
  color: ${(props) => props.theme.colors.black};
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 20px 20px 20px 10px;
  align-items: center;
  font-size: 0.75rem;

  img {
    height: 10rem;
  }
`;

export const MascotDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.3rem;
    margin-top: 10px;
  }
  h2 {
    font-size: 0.75rem;
    font-weight: 400;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 0.75rem;
    font-weight: bold;
  }

  span {
    margin-bottom: 10px;
  }

  img {
    height: 3rem;
  }
`;

export const ModalContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 1.3rem;
  }
`;
export const ModalButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: right;
  margin-top: 20px;
`;

export const CloseModalButton = styled.button`
  background: ${(props) => props.theme.colors.status.red};
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export const FavoriteModalButton = styled.button`
  padding: 10px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.status.yellow};
`;
