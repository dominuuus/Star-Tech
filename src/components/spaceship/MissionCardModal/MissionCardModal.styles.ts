import styled from "styled-components";

export const MissionCardModalContainer = styled.div`
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

export const MissionCardModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 40px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  h1 {
    font-size: 1rem;
  }
`;

export const MissionCardModalTitle = styled.div`
  margin-bottom: 20px;
`;

export const MissionCardModalDescription = styled.div`
  margin-bottom: 20px;
  span {
    font-size: 0.75rem;
  }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const GoToMissionButton = styled.button`
  background: ${(props) => props.theme.colors.gradients.mascotCard};
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem 0;
`;

