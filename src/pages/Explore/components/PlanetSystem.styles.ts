import styled from "styled-components";

interface PlanetSystemProps {
  $zoom?: number;
  $top?: number;
  $left?: number;
}

export const PlanetSystemContainer = styled.div<PlanetSystemProps>`
  width: 100%;
  height: 100%;
  transform: scale(${(props) => props.$zoom});
`;

export const SpaceshipContainer = styled.div<PlanetSystemProps>`
  position: absolute;
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;

  img {
    height: 6rem;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.2) translateY(-8px);
    }
  }
`;

export const NewSpaceshipContainer = styled.div`
  position: absolute;
  top: 450px;
  left: 650px;

  img {
    height: 6rem;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.2) translateY(-8px);
    }
  }
`;

export const LineOnePlanet = styled.div`
  border: 10px solid ${(props) => props.theme.colors.gray.light};
  position: absolute;
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  top: -500px;
  left: -500px;
`;

export const LineTwoPlanet = styled.div`
  border: 10px solid ${(props) => props.theme.colors.gray.light};
  position: absolute;
  width: 3000px;
  height: 3000px;
  border-radius: 50%;
  top: -1000px;
  left: -900px;
`;

export const LineThreePlanet = styled.div`
  border-top: 5px dotted ${(props) => props.theme.colors.gray.light};
  position: absolute;
  width: 5000px;
  left: -1400px;
  top: 350px;
`;
