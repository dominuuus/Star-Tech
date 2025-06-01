import styled from "styled-components";

interface ExploreProps {
  radius?: number;
  angle?: number;
  zoom?: number;
  offset?: { x: number; y: number };
  $top?: number;
  $left?: number;
  $progress?: number;
}

export const SolarWrapper = styled.div`
  position: relative;
  width: 90vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100vw;
    height: 100vh;
    overflow-x: auto;
  }
`;

export const Sun = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #ffd700, #ffa500);
  border-radius: 50%;
  z-index: 10;
  left: 46.5%;
  top: 44.5%;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 60px;
    height: 60px;
    left: 40%;
    top: 45%;
  }
`;

export const Orbit = styled.div<ExploreProps>`
  position: absolute;
  width: ${({ radius = 0 }) => radius * 2}px;
  height: ${({ radius = 0 }) => radius * 2}px;
  border: 1px dashed rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PlanetWrapper = styled.div<ExploreProps>`
  position: absolute;
  transform: rotate(${({ angle }) => angle}deg) translateX(50%)
    rotate(-${({ angle }) => angle}deg);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  span {
    font-size: ${(props) => props.theme.fontSize.medium};
  }
`;

export const PlanetImage = styled.img`
  width: 60px;
  height: 60px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 40px;
    height: 40px;
  }
`;

export const ZoomContainer = styled.div<ExploreProps>`
  transform: translate(
      ${({ offset = { x: 0, y: 0 } }) => `${offset.x}px, ${offset.y}px`}
    )
    scale(${({ zoom }) => zoom});
  transform-origin: center center;
  transition: transform 0.1s ease-out;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: grab;
  user-select: none;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    transform-origin: top left;
    cursor: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const ZoomControls = styled.div`
  position: sticky;
  z-index: 200;
  display: flex;
  flex-direction: row;

  button {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSize.large};
    margin: 4px;
    border: none;
    border-radius: 6px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
      background: ${(props) => props.theme.colors.tertiary};
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    position: absolute;
    flex-direction: column;

    button {
      width: 35px;
      height: 35px;
      font-size: ${(props) => props.theme.fontSize.medium};
      margin: 2px;
    }
  }
`;

export const SpaceshipContainer = styled.div<ExploreProps>`
  position: absolute;
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;
  display: flex;
  flex-direction: row;

  img {
    height: 3rem;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.2) translateY(-8px);
    }
  }

  h2 {
    font-size: ${(props) => props.theme.fontSize.large};
  }

  h4 {
    font-size: ${(props) => props.theme.fontSize.small};
  }

  span {
    font-size: ${(props) => props.theme.fontSize.medium};
  }

  div {
    display: none;
  }
  &:hover {
    div {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    top: ${(props) => (props.$top ? props.$top * 1.2 : 0)}px;
    left: ${(props) => (props.$left ? props.$left * 0.5 : 0)}px;
    h2 {
      font-size: ${(props) => props.theme.fontSize.medium};
    }

    span {
      font-size: ${(props) => props.theme.fontSize.small};
    }
  }
`;

export const ProgressContainer = styled.div<ExploreProps>`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 0 0 10px 10px;
  height: 20px;
  padding-left: 5px;
`;

export const ProgressBarContainer = styled.div<ExploreProps>`
  width: ${(props) => props.$progress}%;
  background-color: ${(props) => props.theme.colors.goldCoin};
  border-radius: 20px 0 20px 20px;
  height: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row;

  animation: ${(props) => (props.$progress ? "grow 4.5s linear" : "none")};
  @keyframes grow {
    0% {
      width: 10%;
      transform: scale(1);
    }
    ${(props) => props.$progress} {
      width: ${(props) => props.$progress}%;
      transform: scale(1);
    }
  }

  span {
    font-weight: bold;
    font-size: 0.5rem;
  }
`;
