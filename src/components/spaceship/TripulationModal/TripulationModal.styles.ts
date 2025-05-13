import styled from "styled-components";

export const TripulationModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const TripulationModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  padding: 20px;
  max-width: 90vw;
  max-height: 80vh;
`;

export const TripulationModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TripulationModalTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const TripulationModalSquad = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  overflow-x: auto;
  margin-bottom: 1rem;

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

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalProfile = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme.colors.gray.lighter};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  max-width: 15rem;
  min-height: 28rem;

  span {
    font-size: 0.75rem;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  text-align: center;

  h1 {
    font-size: 0.75rem;
  }

  h2 {
    font-size: 0.5rem;
  }

  h3 {
    font-size: 0.75rem;
    font-weight: 400;
  }
`;

export const ProfileDescription = styled.div`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  min-height: 12rem;
`;

export const ProfileImage = styled.img`
  height: 6rem;
  border-radius: 10px;
`;

export const MascotContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  max-height: 3rem;

  img {
    height: 2rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.35);
    }
  }
`;

export const ModalSubMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: ${(props) => props.theme.colors.gray.lighter};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
`;

export const SubMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.linkHover};
  }
`;

export const CloseModalButton = styled.button`
  background: ${(props) => props.theme.colors.status.red};
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem 0;
`;
