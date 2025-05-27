import { useEffect, useState } from "react";
import {
  Orbit,
  PlanetImage,
  PlanetWrapper,
  ProgressBarContainer,
  ProgressContainer,
  SolarWrapper,
  SpaceshipContainer,
  Sun,
  ZoomContainer,
  ZoomControls,
} from "./Explore.styles";
import { fetchPlanet, Planet } from "../../services/planetService";
import { fetchSpaceship, Spaceship } from "../../services/spaceshipService";

export function Explore() {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    fetchPlanet().then(setPlanets);
  }, []);

  const [spaceships, setSpaceships] = useState<Spaceship[]>([]);

  useEffect(() => {
    fetchSpaceship().then(setSpaceships).catch(console.error);
  }, []);

  const [zoomLevel, setZoomLevel] = useState(1.2);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.1, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.1, 0.3));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || !e.deltaY) return;
    e.preventDefault();
    const direction = e.deltaY > 0 ? -0.1 : 0.1;
    setZoomLevel((prev) => Math.min(Math.max(prev + direction, 0.3), 3));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartDrag({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setOffset({
      x: e.clientX - startDrag.x,
      y: e.clientY - startDrag.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <>
      <SolarWrapper>
        <ZoomContainer
          zoom={zoomLevel}
          offset={offset}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <Sun />
          {planets.map((planet, index) => {
            const radius = 100 + index * 50 + Math.random() * 20;
            const angle = (45 / planets.length) * index;

            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <Orbit radius={radius}>
                <PlanetWrapper
                  key={planet.id}
                  angle={angle}
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                  }}
                >
                  <PlanetImage src={planet.Imagem} alt={planet.Nome} />
                  <span>{planet.Nome}</span>
                </PlanetWrapper>
              </Orbit>
            );
          })}

          {spaceships.map((spaceship) => (
            <SpaceshipContainer
              key={spaceship.id}
              $top={spaceship.top}
              $left={spaceship.left}
            >
              <img src={spaceship.imagem} alt={spaceship.descricao} />
              <div>
                <h2>{spaceship.nome}</h2>

                <span>
                  Viajando a {spaceship.velocidade_inercial.toLocaleString()}{" "}
                  km/h
                </span>

                <ProgressContainer>
                  <span>
                    {spaceship.planeta_origem} → {spaceship.planeta_destino}
                  </span>

                  <ProgressBarContainer $progress={spaceship.progresso_trajeto}>
                    <span>{spaceship.progresso_trajeto}%</span>
                  </ProgressBarContainer>
                </ProgressContainer>
              </div>
            </SpaceshipContainer>
          ))}
        </ZoomContainer>
        <ZoomControls>
          <button onClick={handleZoomIn}>+</button>
          <button onClick={handleZoomOut}>−</button>
          <button onClick={handleResetZoom}>⟳</button>
        </ZoomControls>
      </SolarWrapper>
    </>
  );
}
