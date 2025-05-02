import {
  MissionDeadLine,
  MissionDetailsBody,
  MissionDetailsContainer,
  MissionDetailsHead,
  MissionTitle,
  ProgressContainer,
  ProgressMissionBar,
  ProgressMissionBarContent,
} from "./MissionDetails.styles";

export function MissionDetails() {
  return (
    <>
      <MissionDetailsContainer>
        <MissionDetailsHead>
          <MissionTitle>
            <span>Repetição infinta</span>
            <span>Projeto: BB Crédito</span>
          </MissionTitle>
          <MissionDeadLine>
            <span>Lançamento da missão: 22/04/2024 08:55</span>
            <span>Prazo para a conclusão: 28/04/2024 18:00</span>
          </MissionDeadLine>
        </MissionDetailsHead>
        <hr />
        <MissionDetailsBody>
          <span>
            Detectamos trechos duplicados em módulos distintos. Isso consome
            energia da nave e pode gerar inconsistência em caso de mudanças
            futuras.{" "}
          </span>
          <h4>Objetivo Técnico:</h4>
          <ul>
            <li>
              Identificar códigos duplicados que podem ser extraidos para
              funções reutilizáveis.{" "}
            </li>
            <li>refatorar para reaproveitamento de lógica comum.</li>
            <li>Testar para que o comportamento se mantenha intacto</li>
          </ul>
          <ProgressContainer>
          <h4 className="Progresso">Progresso</h4>
          <p>O prazo da missão vence em dois dias</p>
          <ProgressMissionBar>
            <ProgressMissionBarContent width="40%">
              40%
            </ProgressMissionBarContent>
          </ProgressMissionBar>
          <div>
            <h4>40%</h4>
          </div>
          </ProgressContainer>
        </MissionDetailsBody>
      </MissionDetailsContainer>
    </>
  );
}
