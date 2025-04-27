import {
  MissionFilterCardContainer,
  NumberStyle,
  StatusLateMission,
  StatusMission,
} from "./MissionFilterCard.styles";

export function MissionFilterCard() {
  return (
    <>
      <MissionFilterCardContainer>
        <StatusLateMission>
          <div>
            <NumberStyle>6</NumberStyle>
          </div>
          <span>Missões atrasadas</span>
        </StatusLateMission>
        <StatusMission>
          <div>
            <NumberStyle>10</NumberStyle>
          </div>
          <span>Missões em andamento</span>
        </StatusMission>
        <StatusMission>
          <div>
            <NumberStyle>24</NumberStyle>
          </div>
          <div>
            <span>Missões concluídas</span>
            <p>(7dias)</p>
          </div>
        </StatusMission>
      </MissionFilterCardContainer>
    </>
  );
}
