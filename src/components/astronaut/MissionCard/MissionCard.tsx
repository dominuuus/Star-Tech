import { CalendarCheck, CaretCircleRight } from "phosphor-react";
import {
  MissionCardContainer,
  MissionCardContent,
  MissionCardInfoContent,
  MissionCardTitle,
} from "./MissionCard.styles";

import gameData from "../../../assets/db/dbgame.json";

export function MissionCard() {
  return (
    <>
      <MissionCardContainer>
        {
          gameData.Missões.map(missao => (
            <MissionCardContent key={missao.Id}>
          <MissionCardInfoContent>
            <MissionCardTitle>
              <span>{missao.Nome}</span>
              <span>Projeto: BBcrédito</span>
            </MissionCardTitle>
            <div>
              <CalendarCheck size={20} weight="fill" />
              <p>{missao.Status}</p>
            </div>
          </MissionCardInfoContent>
          <div>
            <CaretCircleRight size={32} weight="fill" />
          </div>
        </MissionCardContent>

          ))

        }
        
      </MissionCardContainer>

    </>
  );
}
