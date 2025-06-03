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
`;

export const InventoryButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 8px;
`;
export const Button = styled.div`
  position: relative;
  width: 105px;
  height: 40px;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 16px;
  color: white;
  background-color: #09152B;
  font-family: Arial, Helvetica, sans-serif;
  transform: skewX(-20deg);
  transform-origin: left;

  &::before {
    content: '';
    position: absolute;
    left: -30px;
    top: 0;
    width: 30px;
    height: 100%;
    background-color: white;
    transition: width 0.4s ease, left 0.4s ease;
    z-index: -1;
    transform: skewX(-20deg);
    transform-origin: left;
  }

  &:hover::before {
    width: 160px;
    left: 0;
  }

  &:hover {
    color: #09152B;
  }
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

export const AstronautImage = styled.div`
  position: relative;
  img {
    width: 300px;
    display: block;
  }
`;

export const LineWrapper = styled.div`
  position: absolute;
  &[data-mirrored="true"] {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const DiagonalLine = styled.div`
  width: 20px;
  height: 2px;
  background-color: white;
  transform: rotate(-45deg);
  transform-origin: left;
  position: absolute;

  ${LineWrapper}[data-mirrored="true"] & {
    transform: rotate(45deg);
    transform-origin: right;
    left: auto;
    right: 0;
  }
`;

export const HorizontalLine = styled.div`
  width: 40px;
  height: 2px;
  background-color: white;
  margin-left: -5px;
  margin-top: -15px;
  left: 20px;
  position: relative;

  ${LineWrapper}[data-mirrored="true"] & {
    left: auto;
    right: 20px;
    margin-left: 0;
    margin-right: -5px;
  }
`;

export const ScoreBox = styled.div`
  position: absolute;
  left: 60px;
  top: 2px;
  padding: 5px 10px;
  background-color: #2d3748;
  color: white;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 6px;
  font-size: 14px;
  margin-top: -60px;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  ${LineWrapper}[data-mirrored="true"] & {
    left: auto;
    right: 60px;
  }
`;
