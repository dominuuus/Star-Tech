import { CalendarCheck, CaretCircleRight } from "phosphor-react";
import {
  MissionCardContainer,
  MissionCardInfoContent,
  MissionCardTitle,
} from "./MissionCard.styles";

export function MissionCard() {
  return (
    <>
      <MissionCardContainer>
        <MissionCardInfoContent>
          <MissionCardTitle>
            <span>Missão R2-Deploy2</span>
            <span>Projeto: BBcrédito</span>
          </MissionCardTitle>
          <div>
            <CalendarCheck size={20} weight="fill" />
            <p>Vencida ontem</p>
          </div>
        </MissionCardInfoContent>
        <div>
          <CaretCircleRight size={32} weight="fill" />
        </div>
      </MissionCardContainer>

      <MissionCardContainer>
        <MissionCardInfoContent>
          <MissionCardTitle>
            <span>Missão R2-Deploy2</span>
            <span>Projeto: BBcrédito</span>
          </MissionCardTitle>
          <div>
            <CalendarCheck size={20} weight="fill" />
            <p>Vencida ontem</p>
          </div>
        </MissionCardInfoContent>
        <div>
          <CaretCircleRight size={32} weight="fill" />
        </div>
      </MissionCardContainer>
    </>
  );
}
