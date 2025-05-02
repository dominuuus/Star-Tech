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

import dataGame from "../../../assets/db/dbgame.json";

export function MissionDetails() {
  const selectedMission = dataGame.Missões.slice(0, 1);

  return (
    <>
      <MissionDetailsContainer>
        {selectedMission.map((mission) => {
          {
            let ProgressBar = ProjectProgressCritical;
            if (
              mission.progresso_porcentagem >= 50 &&
              mission.progresso_porcentagem <= 79
            ) {
              ProgressBar = ProjectProgressAlert;
            } else if (mission.progresso_porcentagem >= 80) {
              ProgressBar = ProjectProgressSuccess;
            }

            return (
              <MissionDetailsContent key={mission.Id}>
                <MissionDetailsHead>
                  <MissionTitle>
                    <span>{mission.Nome}</span>
                    <span>Projeto: {mission.Nome_projeto}</span>
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
                  <span>{mission.objetivo_tecnico}</span>
                  <ProgressContainer>
                    <h4 className="Progresso">Progresso</h4>
                    <p>O prazo da missão vence em dois dias</p>
                    <ProgressMissionBar>
                      <ProgressBar
                        width={mission.progresso_porcentagem}
                        background={mission.progresso_porcentagem}
                      ></ProgressBar>
                    </ProgressMissionBar>
                    <div>
                      <h4>{mission.progresso_porcentagem}%</h4>
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
