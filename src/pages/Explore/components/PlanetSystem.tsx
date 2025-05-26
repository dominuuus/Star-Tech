import {
  LineOnePlanet,
  LineThreePlanet,
  LineTwoPlanet,
  NewSpaceshipContainer,
  PlanetSystemContainer,
  SpaceshipContainer,
} from "./PlanetSystem.styles";
import { Planet as PlanetType } from "../../../services/planetService";
import { Planet } from "./Planet";
import images from "../../../assets/images";
import { useRef, useState } from "react";

interface PlanetSystemProps {
  planets: PlanetType[];
  zoom: number;
}

export function PlanetSystem({ planets, zoom }: PlanetSystemProps) {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startPos, setStartPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [startScroll, setStartScroll] = useState<{ left: number; top: number }>(
    { left: 0, top: 0 }
  );
  const viewportRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (viewportRef.current) {
      setIsDragging(true);
      setStartPos({ x: e.clientX, y: e.clientY });
      setStartScroll({
        left: viewportRef.current.scrollLeft,
        top: viewportRef.current.scrollTop,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && viewportRef.current) {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      viewportRef.current.scrollTo({
        left: startScroll.left - dx,
        top: startScroll.top - dy,
        behavior: "auto",
      });
      console.log(
        `Dragging: dx=${dx}, dy=${dy}, scrollLeft=${startScroll.left - dx}, scrollTop=${startScroll.top - dy}`
      );
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <PlanetSystemContainer
        $zoom={zoom}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <LineOnePlanet></LineOnePlanet>

        <LineTwoPlanet></LineTwoPlanet>

        <LineThreePlanet></LineThreePlanet>

        <SpaceshipContainer>
          <img src={images.naveAnimada} alt="" />
        </SpaceshipContainer>

        <NewSpaceshipContainer>
          <img src={images.newnave} alt="" />
        </NewSpaceshipContainer>

        {planets.map((planet) => (
          <Planet
            key={planet.id}
            image={planet.Imagem ?? ""}
            top={planet.top}
            left={planet.left}
            isCentral={planet.categoria === "Planeta Principal"}
          />
        ))}
      </PlanetSystemContainer>
    </>
  );
}
