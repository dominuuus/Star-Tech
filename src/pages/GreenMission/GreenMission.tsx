import { useEffect, useState } from "react";
import { GreenMissionCard } from "./components/GreenMissionCard/GreenMissionCard";
import {
  GoChallegeButton,
  GoChallegeButtonContainer,
  GreenMissionBar,
  GreenMissionContainer,
  GreenMissionDetails,
  ListOfMissionsContainer,
  MissionDetailContainer,
} from "./GreenMission.styles";
import {
  fetchGreenMissionLevel,
  GreenMissionChallenge,
} from "../../services/greenMissionLevelService";
import { GreenMissionLevel } from "./components/GreenMissionLevel/GreenMissionLevel";

export function GreenMission() {
  const [selectedLevelId, setSelectedLevelId] = useState<number | null>(null);
  const [challenges, setChallenges] = useState<GreenMissionChallenge[]>([]);
  const [selectedChallenge, setSelectedChallenge] =
    useState<GreenMissionChallenge | null>(null);

  useEffect(() => {
    fetchGreenMissionLevel().then(setChallenges).catch(console.error);
  }, []);

  const filteredChallenges = challenges.filter(
    (challenge) => challenge.missao_verde_id === selectedLevelId
  );

  const handleChallengeSelect = (challenge: GreenMissionChallenge | null) => {
    setSelectedChallenge(challenge);
  };

  return (
    <GreenMissionContainer>
      <GreenMissionBar>
        <GreenMissionLevel onSelectLevel={setSelectedLevelId} />
      </GreenMissionBar>

      <GreenMissionDetails>
        <ListOfMissionsContainer>
          <GreenMissionCard
            challenges={filteredChallenges}
            onChallengeSelect={handleChallengeSelect}
          />
        </ListOfMissionsContainer>

        <MissionDetailContainer>
          {selectedChallenge ? (
            <div>
              <h4>{selectedChallenge.nome}</h4>

              <hr />
              <p>{selectedChallenge.descricao}</p>
              <span>Recompensa: {selectedChallenge.recompensa} estelares</span>
            </div>
          ) : (
            <div>
              <h4>Selecione um desafio</h4>
              <hr />
              <p>Escolha um desafio da lista para ver os detalhes.</p>
            </div>
          )}
          <GoChallegeButtonContainer>
            <GoChallegeButton>
              <span>Ir para o desafio</span>
            </GoChallegeButton>
          </GoChallegeButtonContainer>
        </MissionDetailContainer>
      </GreenMissionDetails>
    </GreenMissionContainer>
  );
}
