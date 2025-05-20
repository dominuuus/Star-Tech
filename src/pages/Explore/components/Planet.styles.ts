import styled from "styled-components";

interface PlanetProps {
  $image: string;
  $top: number;
  $left?: number;
  $isCentral: boolean;
}

export const PlanetStyled = styled.div<PlanetProps>`
  position: absolute;
  left: ${(props) => (props.$isCentral ? "200px" : `${props.$left}px`)};
  top: ${(props) => (props.$isCentral ? "200px" : `${props.$top}px`)};

  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  img {
    height: 20rem;
  }

  &:hover {
    transform: scale(1.5) translateY(-8px);
  }
`;

/*
-- Opções de visualização do planeta

#Terrara é o centro
left: ${(props) =>
    props.$isCentral ? '200px' : `calc(200px + ${800 * Math.cos((props.$left! * Math.PI) / 180)}px)`};
  top: ${(props) =>
    props.$isCentral ? '200px' : `calc(200px + ${800 * Math.sin((props.$left! * Math.PI) / 180)}px)`};


#Navegação em linha
left: ${(props) =>
    props.$isCentral
      ? "200px"
      : `${props.$left}px`};
  top: ${(props) =>
    props.$isCentral
      ? "200px"
      : `${props.$top}px`};


    */
