import styled from "styled-components";

export const SpaceshipContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  h1 {
    font-size: 2rem;
  }
`;

export const MissionUpdatesContent = styled.div`
  width: 20rem;
  height: 50rem;
  margin-left: 35rem;
`;

export const ExploredPlanetContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    height: 5rem;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        }
  }
`;

export const SpaceshipCardContainer = styled.div`
  img {
    height: 30rem;
    position: absolute;

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
