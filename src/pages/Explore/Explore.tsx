import { useEffect, useRef, useState } from "react";
import { fetchPlanet, Planet } from "../../services/planetService";
import {
  UniverseContainer,
  Viewport,
  ZoomButton,
  ZoomControls,
} from "./Explore.styles";
import { PlanetSystem } from "./components/PlanetSystem";

export function Explore() {
  const [planet, setPlanets] = useState<Planet[]>([]);
  const [zoom, setZoom] = useState<number>(0.8);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startPos, setStartPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [startScroll, setStartScroll] = useState<{ left: number; top: number }>(
    { left: 0, top: 0 }
  );
  const viewportRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    setZoom((prev) => {
      const newZoom = Math.min(Math.max(prev - e.deltaY * 0.001, 0.2), 2);
      console.log(`Zoom: ${newZoom}`);
      return newZoom;
    });
  };

  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTo({
        left: 2500 - window.innerWidth / 2,
        top: 2500 - window.innerHeight / 2,
        behavior: "smooth",
      });
    }
  }, []);

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

  const zoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.1, 2));
  };

  const zoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.1, 0.2));
  };

  useEffect(() => {
    fetchPlanet().then(setPlanets).catch(console.error);
  }, []);

  return (
    <>
      <UniverseContainer>
        <Viewport
          ref={viewportRef}
          $isDragging={isDragging}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <PlanetSystem planets={planet} zoom={zoom} />
        </Viewport>

        <ZoomControls>
          <ZoomButton onClick={zoomIn}>+</ZoomButton>
          <ZoomButton onClick={zoomOut}>−</ZoomButton>
        </ZoomControls>
      </UniverseContainer>
    </>
  );
}
