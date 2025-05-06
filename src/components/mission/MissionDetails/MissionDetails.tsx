import images from "../../../assets/images";
import { useEffect, useState } from "react";
import {
  MissionDeadLine,
  MissionDetailsBody,
  MissionDetailsContainer,
  MissionDetailsContent,
  MissionDetailsHead,
  MissionTitle,
  ProgressContainer,
  ProgressMissionBar,
  ProjectProgressCritical,
  ProjectProgressAlert,
  ProjectProgressSuccess,
  ProgressMissionBarInfo,
  MissionDescription,
  TechLiderProfile,
  ProgressContainerHead,
  TechLiderProfileText,
  RewardsContainer,
  RewardsCards,
  RewardCardEstelar,
  RewardEstelarPhoto,
  RewardCardMedalPhoto,
  RewardCardMedalText,
  RewardCardMedal,
  MissionTechnicalObjectiveContainer,
} from "./MissionDetails.styles";
import {
  fetchMission,
  fetchMissionById,
  Mission,
} from "../../../services/missionService";
import { useParams } from "react-router-dom";
import achievements from "../../../assets/achievements";

export function MissionDetails() {
  const { id } = useParams<{ id: string }>();
  const [mission, setMission] = useState<Mission | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      // Carregar missão específica por ID
      fetchMissionById(Number(id))
        .then((data) => {
          setMission(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      // Carregar missão padrão (primeira atrasada ou primeira disponível)
      fetchMission()
        .then((missions) => {
          if (missions.length === 0) {
            setError("Nenhuma missão encontrada");
            setLoading(false);
            return;
          }
          // Priorizar missão com status "Atrasada"
          const defaultMission =
            missions.find((m) => m.Status === "Atrasada") || missions[0];
          setMission(defaultMission);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!mission) return <div>Missão não encontrada</div>;

  let ProgressBar = ProjectProgressCritical;
  if (mission.Progresso_missão >= 50 && mission.Progresso_missão <= 79) {
    ProgressBar = ProjectProgressAlert;
  } else if (mission.Progresso_missão >= 80) {
    ProgressBar = ProjectProgressSuccess;
  }

  return (
    <MissionDetailsContainer>
      <MissionDetailsContent>
        <MissionDetailsHead>
          <MissionTitle>
            <span>{mission.Nome}</span>
            <span>Projeto: {mission.Projeto_Nome || "Sem projeto"}</span>
          </MissionTitle>
          <MissionDeadLine>
            <span>
              Lançamento da missão: {mission.Data_Criação || "Sem data"}
            </span>
            <span>
              Prazo para a conclusão: {mission.Data_Prazo || "Sem prazo"}
            </span>
          </MissionDeadLine>
        </MissionDetailsHead>
        <hr />
        <MissionDetailsBody>
          <MissionDescription>
            <span>{mission.Descrição}</span>
          </MissionDescription>
          <MissionTechnicalObjectiveContainer>
            <h4>Objetivo Técnico:</h4>
            <span>{mission.Objetivo_Técnico.split('\n').map((item, index) => (
  <li key={index}>{item}</li>
))}</span>
          </MissionTechnicalObjectiveContainer>
          <ProgressContainer>
            <ProgressContainerHead>
              <h4 className="Progresso">Progresso</h4>

              <p>
                {(mission.Status !== "Concluída" &&
                  `${mission.relativeDueDate}`) ||
                  (mission.Status === "Concluída" &&
                    `Concluída em ${mission.Concluído_em}`)}
              </p>
            </ProgressContainerHead>
            <ProgressMissionBarInfo>
              <ProgressMissionBar>
                <ProgressBar
                  $width={mission.Progresso_missão}
                  $background={mission.Progresso_missão}
                />
              </ProgressMissionBar>
              <h4 className="Percentual">{mission.Progresso_missão}%</h4>
              <TechLiderProfile>
                <img src={images.leader} alt="Tech Líder" />
                <TechLiderProfileText>
                  <h4>Tech Líder</h4>
                  <span>{mission.Tech_Líder_Nome || "Sem líder"}</span>
                  <p>
                    @
                    {mission.Tech_Líder_Nome?.replace(/\s/g, "") ||
                      "sra.commit"}
                  </p>
                </TechLiderProfileText>
              </TechLiderProfile>
            </ProgressMissionBarInfo>
          </ProgressContainer>
          <RewardsContainer>
            <h4 className="Reward">Recompensas</h4>
            <RewardsCards>
              <RewardCardEstelar>
                <RewardEstelarPhoto>
                  <img src={images.coin} alt="" />
                </RewardEstelarPhoto>
                <h4>{mission.Qtd_moedas} Estelares</h4>
              </RewardCardEstelar>
              <RewardCardMedal>
                <RewardCardMedalPhoto>
                  <img src={achievements.ferroVermelho} alt="" />
                </RewardCardMedalPhoto>
                <RewardCardMedalText>
                  <h4>Código limpo</h4>
                  <p>Eliminar redundâncias ou excessos de um código antigo</p>
                </RewardCardMedalText>
              </RewardCardMedal>
            </RewardsCards>
          </RewardsContainer>
        </MissionDetailsBody>
      </MissionDetailsContent>
    </MissionDetailsContainer>
  );
}
