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
                    <span>Projeto: {mission.Projeto_Id}</span>
                  </MissionTitle>
                  <MissionDeadLine>
                    <span>Lançamento da missão: {mission.Data_Criação}</span>
                    <span>Prazo para a conclusão: {mission.Data_Prazo}</span>
                  </MissionDeadLine>
                </MissionDetailsHead>
                <hr />
                <MissionDetailsBody>
                  <span>{mission.Descrição} </span>
                  <h4>Objetivo Técnico:</h4>
                  <span>{mission.Objetivo_técnico}</span>
                  <ProgressContainer>
                    <h4 className="Progresso">Progresso</h4>
                    <p>O prazo da missão vence em dois dias</p>
                    <ProgressMissionBar>
                      <ProgressBar
                        width={mission.Progresso_missão}
                        background={mission.Progresso_missão}
                      ></ProgressBar>
                    </ProgressMissionBar>
                    <div>
                      <h4>{mission.Progresso_missão}%</h4>
                    </div>
                  </ProgressContainer>
                </MissionDetailsBody>
              </MissionDetailsContent>
            );
          }
        })}
      </MissionDetailsContainer>
    </>
  );
}
