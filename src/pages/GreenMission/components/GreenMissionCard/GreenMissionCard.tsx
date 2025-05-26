import { Cards, ProgressBar, ProgressBarIndicator, TitleCard } from "./GreenMissionCard.styles";

export function GreenMissionCard() {
  return (
    <>
      <Cards>
        <TitleCard>
          <span>Faça o tour completo pela plataforma</span>
        </TitleCard>
        <ProgressBar>
          <ProgressBarIndicator>
          </ProgressBarIndicator>
        </ProgressBar>
      </Cards>
    
    </>
  );
}
