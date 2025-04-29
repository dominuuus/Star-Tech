import styled from "styled-components";

export const AstronautContainer = styled.main`
    display: flex;
`

export const AstronautSectionTwo = styled.section`
    display: flex;
    flex-direction: column;
`

export const AstronautSectionOne = styled.section`
    display: flex;
    flex-direction: column;
`

export const SectionTwoContentOne = styled.div`
    display: grid;
    grid-template-columns: 60% 36%;
    margin-top: 1rem;
    gap: 0.5rem;
`

export const MascotAchieveNewsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const SectionTwoContentTwo = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 0.5rem;

`

export const NewsContent = styled.div`
    width: 100%
`

export const MissionStatusContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #dfdfdf;
    width: 28rem;
    height: 20rem;
    border-radius: 0.75rem;
    padding: 1rem;
    gap: 15px;
    margin-top: 20px;
`
export const CommandCenterContent = styled.div`
    width: 28rem;
    height: 20rem;
    border-radius: 0.75rem;
`

export const MascotContent = styled.div`
    border-radius: 0.75rem;
    padding: 1rem;

    img {
        height: 4rem;
        cursor: pointer;
    }
`

export const AchievementContent = styled.div`
    border-radius: 0.75rem;
    padding: 1rem;
    max-height: 4rem;

    img {
        height: 3.5rem;
        cursor: pointer;
    }
`


export const CustomizeButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: blue;
  }
`;

export const ModalTitle = styled.h2`
  color: black;
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
    margin-bottom: 10px
  }

  img {
    height: 3rem;
  }
`

export const ModalContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ModalContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  span {
    font-weight: bold;
    font-size: 1.3rem;
  }
`
export const ModalButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: right;
  margin-top: 20px;
`;

export const CloseModalButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export const FavoriteModalButton = styled.button`
  padding: 10px;
  border-radius: 4px;
  background-color: yellow;
`;