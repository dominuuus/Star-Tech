import {
  CardMissionContainer,
  CardMissionDetails,
  TitleMission,
} from "./MissionCardStatus.styles";

import { CaretCircleRight, Calendar } from "phosphor-react";

export function MissionCardStatus() {
  return (
    <>
<CardMissionContainer>
        <button>
          <CardMissionDetails>
            <TitleMission>
              <span>Missão: Função Fora de Órbita</span>
              <span>Projeto: BB Conta Corrente</span>
            </TitleMission>
            <div className="calendar">
              <Calendar size={22} weight="fill" />
              <p>Não Iniciada</p>
            </div>
          </CardMissionDetails>
          <div className="seta">
            <CaretCircleRight size={32} weight="fill" />
          </div>
        </button>
      </CardMissionContainer>

      

      <CardMissionContainer>
        <button>
          <CardMissionDetails>
            <TitleMission>
              <span>Missão: Função Fora de Órbita</span>
              <span>Projeto: BB Conta Corrente</span>
            </TitleMission>
            <div className="calendar">
              <Calendar size={22} weight="fill" />
              <p>Não Iniciada</p>
            </div>
          </CardMissionDetails>
          <div className="seta">
            <CaretCircleRight size={32} weight="fill" />
          </div>
        </button>
      </CardMissionContainer>
    </>
  );
}