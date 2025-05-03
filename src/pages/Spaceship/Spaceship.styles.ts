import styled from "styled-components";

export const SpaceshipContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
  }
`;

export const SpaceshipContent = styled.div`
  display: flex;
  h1 {
    font-size: 2rem;
  }
`;

export const MissionUpdatesContent = styled.div`
  width: 20rem;
  height: 50rem;
  margin-left: 68rem;
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
      font-size: 1rem;
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
    font-size: 0.75rem;

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
    font-size: 0.75rem;

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
  font-size: 0.75rem;

  img {
    height: 17rem;
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
