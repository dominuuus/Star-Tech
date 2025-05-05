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
} from "./MissionDetails.styles";
import { fetchMission, Mission } from "../../../services/missionService";

export function MissionDetails() {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    fetchMission().then(setMissions).catch(console.error);
  }, []);

  const filteredMissions = missions.slice(0, 1);

  return (
    <>
      <MissionDetailsContainer>
        {filteredMissions.map((mission) => {
          {
            let ProgressBar = ProjectProgressCritical;
            if (
              mission.Progresso_missão >= 50 &&
              mission.Progresso_missão <= 79
            ) {
              ProgressBar = ProjectProgressAlert;
            } else if (mission.Progresso_missão >= 80) {
              ProgressBar = ProjectProgressSuccess;
            }

            return (
              <MissionDetailsContent key={mission.Id}>
                <MissionDetailsHead>
                  <MissionTitle>
                    <span>{mission.Nome}</span>
                    <span>Projeto: {mission.Projeto_Nome}</span>
                  </MissionTitle>
                  <MissionDeadLine>
                    <span>Lançamento da missão: {mission.Data_Criação}</span>
                    <span>Prazo para a conclusão: {mission.Data_Prazo}</span>
                  </MissionDeadLine>
                </MissionDetailsHead>
                <hr />
                <MissionDetailsBody>
                  <MissionDescription>
                    <span>{mission.Descrição} </span>
                  </MissionDescription>
                  <div>
                    <h4>Objetivo Técnico:</h4>
                    <span>{mission.Objetivo_Técnico}</span>
                  </div>

                  <ProgressContainer>
                    <ProgressContainerHead>
                      <h4 className="Progresso">Progresso</h4>
                      <p>{mission.relativeDueDate}</p>
                    </ProgressContainerHead>

                    <ProgressMissionBarInfo>
                      <ProgressMissionBar>
                        <ProgressBar
                          width={mission.Progresso_missão}
                          background={mission.Progresso_missão}
                        ></ProgressBar>
                      </ProgressMissionBar>
                      <h4 className="Percentual">
                        {mission.Progresso_missão}%
                      </h4>
                      <TechLiderProfile>
                        <img src={images.profile1} alt="" />
                        <TechLiderProfileText>
                          <p>Tech Lider</p>
                          <h4>Maiara Pires</h4>
                          <span>@Sra.Commit</span>
                        </TechLiderProfileText>
                      </TechLiderProfile>
                    </ProgressMissionBarInfo>
                  </ProgressContainer>
                  <RewardsContainer>
                    <h4>Recompensas</h4>
                    <RewardsCards>
                      <h4>{mission.Qtd_moedas} Estelares</h4>
                    </RewardsCards>
                  </RewardsContainer>
                </MissionDetailsBody>
              </MissionDetailsContent>
            );
          }
        })}
      </MissionDetailsContainer>
    </>
  );
}
