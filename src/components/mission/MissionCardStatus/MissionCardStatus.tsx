import {
  CardMissionContainer,
  CardMissionDetails,
  TitleMission,
} from "./MissionCardStatus.styles";

import { CaretCircleRight, CalendarCheck } from "phosphor-react";

export function MissionCardStatus() {
  return (
    <>
<CardMissionContainer>
        <button>
          <CardMissionDetails>
            <TitleMission>
              <span>Corrigir Acessibilidade no APP</span>
              <span>Projeto: Acessibilidade App</span>
            </TitleMission>
            <div className="calendar">
              <CalendarCheck size={22} weight="fill" />
              <p>Atrasada</p>
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
              <span>Atualizar Dependências Obsoletas</span>
              <span>Projeto: Financiamento Imobiliário</span>
            </TitleMission>
            <div className="calendar">
              <CalendarCheck size={22} weight="fill" />
              <p>Atrasada</p>
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