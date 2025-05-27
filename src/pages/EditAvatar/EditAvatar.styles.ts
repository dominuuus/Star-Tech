import styled from "styled-components";

export const EditAvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  gap: 100px;
  width: 90vw;
  margin-top: 20px;
  span {
    font-weight: bold;
    padding: 5px;
    font-size: 22px;
  }
`;

export const Inventory = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;
export const GridInventario = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(2, 80px);
  gap: 0;
`;

export const Cell = styled.div`
  width: 80px;
  height: 80px;
  background-color: #1a202c;
  border: 1px solid #444;
  transition:
    box-shadow 0.3s ease,
    background-color 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  &[data-highlight="true"] {
    box-shadow: 0 0 20px 8px white;
    background-color: #2d3748;
  }
`;
export const Equip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const GridEquip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BodyCell = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ZoomableAstronaut = styled.div<{ "data-zoom"?: boolean }>`
  transition: transform 0.5s ease;
  transform: ${({ "data-zoom": zoom }) =>
    zoom ? "scale(2.5) translateY(-30%)" : "scale(1) translateY(0)"};
  transform-origin: top center;

  img {
    width: 300px;
    height: auto;
    display: block;
  }
`;

export const AstronautImage = styled.div`
  position: relative;
  img {
    width: 300px;
    display: block;
  }
`;
