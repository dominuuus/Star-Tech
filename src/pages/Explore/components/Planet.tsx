import { PlanetStyled } from "./Planet.styles";

interface PlanetProps {
  image: string;
  top: number;
  left: number;
  isCentral: boolean;
}

export function Planet({ image, top, left, isCentral }: PlanetProps) {
  return (
    <>
      <PlanetStyled
        $image={image}
        $top={top}
        $left={left}
        $isCentral={isCentral}
      >
        <img src={image} alt="" />
      </PlanetStyled>
    </>
  );
}
