import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

export const SpaceshipContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  h1 {
    font-size: ${(props) => props.theme.fontSize.extraLarge};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 80vw;
    height: 100vh;
  }
`;

export const SpaceshipContent = styled.div`
  display: flex;
  h1 {
    font-size: ${(props) => props.theme.fontSize.extraLarge};
  }
`;

export const MissionUpdatesContent = styled.div`
  width: 20rem;
  height: fit-content;
  margin-left: 68rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const ExploredPlanetContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;

  img {
    height: 5rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 18rem;
    overflow-y: auto;
    padding: 10px;
  }
`;

export const SpaceshipCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    background: ${(props) => props.theme.colors.gradients.tripulation};
    color: ${(props) => props.theme.colors.white};
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;

    span {
      opacity: 0;
      width: 0;
      overflow: hidden;
      font-size: ${(props) => props.theme.fontSize.large};
      font-weight: bold;
      transition:
        opacity 0.3s ease,
        width 0.3s ease;
    }

    &:hover {
      background: ${(props) => props.theme.colors.gradients.tripulation};

      span {
        opacity: 1;
        width: auto;
      }
    }
  }

  h3 {
    display: flex;
    background: ${(props) => props.theme.colors.gradients.missionRedAlert};
    color: ${(props) => props.theme.colors.white};
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    font-size: ${(props) => props.theme.fontSize.medium};

    span {
      opacity: 0;
      width: 0;
      overflow: hidden;
      white-space: nowrap;
      transition:
        opacity 0.3s ease,
        width 0.3s ease;
    }

    &:hover {
      background: ${(props) => props.theme.colors.gradients.missionRedAlert};

      span {
        opacity: 1;
        width: auto;
      }
    }
  }

  h4 {
    display: flex;
    background: ${(props) => props.theme.colors.gradients.missionYellowAlert};
    color: ${(props) => props.theme.colors.white};
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    font-size: ${(props) => props.theme.fontSize.medium};

    span {
      opacity: 0;
      width: 0;
      overflow: hidden;
      white-space: nowrap;
      transition:
        opacity 0.3s ease,
        width 0.3s ease;
    }

    &:hover {
      background: ${(props) => props.theme.colors.gradients.missionYellowAlert};

      span {
        opacity: 1;
        width: auto;
      }
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
  font-size: ${(props) => props.theme.fontSize.medium};

  img {
    height: 17rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;

    img {
      height: 7rem;
    }
  }
`;

export const MascotDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: ${(props) => props.theme.fontSize.large};
    margin-top: 10px;
  }
  h2 {
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: 400;
    margin-bottom: 10px;
  }
  h3 {
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: bold;
  }

  span {
    margin-bottom: 10px;
  }

  img {
    height: 3rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    img {
      height: 2rem;
    }
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
    font-size: ${(props) => props.theme.fontSize.large};
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

export const StyledCanvas = styled(Canvas)`
  position: absolute;
  top: 10%;
  left: 1%;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    left: 8%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    left: 8%;
  }
`;
