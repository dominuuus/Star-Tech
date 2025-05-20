import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: ${(props) => props.theme.colors.primary};
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

export const ModalContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const ModalContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AchievementContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const AchievementDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1rem;
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

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    h1 {
      font-size: 0.9rem;
    }

    span {
      font-weight: bold;
    }

    div {
      gap: 0;

      img {
        height: 3rem;
        width: 3.5rem;

        &:hover {
          transform: none;
        }
      }
    }
  }
`;

export const ModalButtons = styled.section`
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
