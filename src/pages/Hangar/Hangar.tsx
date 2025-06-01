import { useEffect, useState } from "react";
import {
  HangarContainer,
  HangarDetailsContainer,
  HangarImageContainer,
  HangarListContainer,
  SpaceshipInfoContainer,
  SpachipContainer,
  StyledCanvas,
} from "./Hangar.styles";
import { fetchSpaceship, Spaceship } from "../../services/spaceshipService";
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
            <p
              style={{
                position: "absolute",
                top: 200,
                left: 200,
                fontSize: "2rem",
                backgroundColor: "rgba(0, 0, 0, 0.744)",
                color: "#e2e2db",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              Nave Bloqueada
            </p>
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
          <HangarImageContainer>
            {selectedSpaceship ? (
              <div className="ShipTitle">
                <h1>{selectedSpaceship.nome}</h1>
                <p>{selectedSpaceship.descricao}</p>
              </div>
            ) : spaceships.length > 0 ? (
              <p className="ShipTitle">Selecione uma nave para ver os detalhes.</p>
            ) : (
              <p className="ShipTitle">Não há naves disponíveis.</p>
            )}
            <StyledCanvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              style={{
                position: "absolute",
                zIndex: 0,
                width: "80vw",
              }}
            >
              <ambientLight intensity={5.5} />
              <spotLight position={[-20, 10, 10]} angle={0.15} penumbra={1} />
              {selectedSpaceship &&
                renderSpaceshipModel(selectedSpaceship)}{" "}
              <OrbitControls />
            </StyledCanvas>
          </HangarImageContainer>

          <SpaceshipInfoContainer>
            {selectedSpaceship ? (
              <div>
                <ul>
                  <li>
                    <h3>Velocidade inercial</h3>{" "}
                    <span>
                      {selectedSpaceship.velocidade_inercial.toLocaleString()}{" "}
                      km
                    </span>
                  </li>
                  <li>
                    <h3>Altitude</h3>{" "}
                    <span>
                      {selectedSpaceship.altitude.toLocaleString()} km
                    </span>
                  </li>
                  <li>
                    <h3>Apogeu</h3>{" "}
                    <span>{selectedSpaceship.apogeu.toLocaleString()} km</span>
                  </li>
                  <li>
                    <h3>Perigeu</h3>{" "}
                    <span>{selectedSpaceship.perigeu.toLocaleString()} km</span>
                  </li>
                  <li>
                    <h3>Inclinação</h3>{" "}
                    <span>
                      {selectedSpaceship.inclinacao.toLocaleString()}º
                    </span>
                  </li>
                  <li>
                    <h3>Altura</h3>{" "}
                    <span>{selectedSpaceship.altura.toLocaleString()} m</span>
                  </li>
                  <li>
                    <h3>Diâmetro</h3>{" "}
                    <span>{selectedSpaceship.diametro.toLocaleString()} m</span>
                  </li>
                  <li>
                    <h3>Capacidade de carga</h3>{" "}
                    <span>
                      {selectedSpaceship.capacidade_carga.toLocaleString()} kg
                    </span>
                  </li>
                  <li>
                    <h3>Combustível</h3>{" "}
                    <span>
                      {selectedSpaceship.combustivel.toLocaleString()} litros
                    </span>
                  </li>
                </ul>
              </div>
            ) : spaceships.length > 0 ? (
              <p></p>
            ) : (
              <p className="ShipTitle">Não há naves disponíveis.</p>
            )}
          </SpaceshipInfoContainer>
        </HangarDetailsContainer>
      </HangarContainer>
    </>
  );
}
