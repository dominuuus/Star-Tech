import { useEffect, useState } from "react";
import {
  HangarContainer,
  HangarDetailsContainer,
  HangarListContainer,
  SpachipContainer,
} from "./Hangar.styles";
import { fetchSpaceship, Spaceship } from "../../services/spaceshipService";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { BugFreeOne3D } from "../../components/3D/BugFreeOne3D";
import { Codestar3D } from "../../components/3D/Codestar3D";

function renderSpaceshipModel(spaceship: Spaceship | null) {
    if (!spaceship) return null;
  switch (spaceship.nome) {
    case "Bug Free One":
      return <BugFreeOne3D />;
    case "Codestar-1":
      return <Codestar3D />;
    default:
      return (
        <mesh>
          <Html center>
            <img
              src={spaceship.estatico}
              alt={spaceship.nome}
              style={{
                width: "900px",
              }}
            />
            <p style={{
                position: "absolute",
                top: 200,
                left: 300,
                fontSize: "2rem",
                backgroundColor: "rgba(0, 0, 0, 0.744)",
                color: "#e2e2db",
                padding: "20px",
                borderRadius: "20px",
              }}>Nave Bloqueada</p>
          </Html>
        </mesh>
      );
  }
}

export function Hangar() {
  const [spaceships, setSpaceships] = useState<Spaceship[]>([]);
  const [selectedSpaceship, setSelectedSpaceship] = useState<Spaceship | null>(
    null
  );

  useEffect(() => {
    fetchSpaceship().then(setSpaceships).catch(console.error);
  }, []);

  return (
    <>
      <HangarContainer>
        <HangarListContainer>
          {spaceships.map((spaceship) => (
            <SpachipContainer
              key={spaceship.id}
              onClick={() => setSelectedSpaceship(spaceship)}
            >
              <img src={spaceship.estatico} alt="" />
            </SpachipContainer>
          ))}
        </HangarListContainer>

        <HangarDetailsContainer>
          {selectedSpaceship ? (
            <div>
              <h1>{selectedSpaceship.nome}</h1>
              <p>{selectedSpaceship.descricao}</p>
            </div>
          ) : spaceships.length > 0 ? (
            <p>Selecione uma nave para ver os detalhes.</p>
          ) : (
            <p>Não há naves disponíveis.</p>
          )}

          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            style={{
              position: "absolute",
              top: 85,
              left: 300,
              zIndex: 0,
              width: "80vw",
            }}
          >
            <ambientLight intensity={5.5} />
            <spotLight position={[-20, 10, 10]} angle={0.15} penumbra={1} />
{selectedSpaceship && renderSpaceshipModel(selectedSpaceship)}            <OrbitControls />
          </Canvas>
        </HangarDetailsContainer>
      </HangarContainer>
    </>
  );
}
