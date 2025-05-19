import styled from "styled-components";

interface ExploreProps {
  $isDragging: boolean;
}

export const UniverseContainer = styled.div`
  overflow: auto;
  background: #0a0a23;
`;

export const Viewport = styled.div<ExploreProps>`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: transparent;
  display: flex;
  cursor: ${(props) => (props.$isDragging ? "grabbing" : "grab")};
`;

export const ZoomControls = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
`;

export const ZoomButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #555;
  }
`;


