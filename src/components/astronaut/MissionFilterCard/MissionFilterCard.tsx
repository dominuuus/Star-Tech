import {
  MissionFilterCardContainer,
  NumberStyle,
  StatusDoneMission,
  StatusInProgressMission,
  StatusLateMission,
} from "./MissionFilterCard.styles";

import gameData from "../../../assets/db/dbgame.json"

interface MissionFilterCardProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export function MissionFilterCard({ selectedFilter, onFilterChange }: MissionFilterCardProps) {

  const missionCount = {
    late: gameData.Missões.filter(m => m.Status === 'Atrasada').length,
    inProgress: gameData.Missões.filter(m => m.Status === 'Em Progresso').length,
    done: gameData.Missões.filter(m => m.Data_Conclusão !== null).length,
    done7days: gameData.Missões.filter(m => {
      if(!m.Data_Conclusão) return false;
      const doneDate = new Date(m.Data_Conclusão);
      const sevenDaysLater = new Date();
      sevenDaysLater.setDate(sevenDaysLater.getDate() - 7);
      return doneDate >= sevenDaysLater;
    }).length
  }
  
  return (
    <>
      <MissionFilterCardContainer>
        <StatusLateMission isSelected={selectedFilter === "late"}
        onClick={() => onFilterChange("late")}>
          <div>
            <NumberStyle>{missionCount.late}</NumberStyle>
          </div>
          <span>Missões atrasadas</span>
        </StatusLateMission>
        <StatusInProgressMission isSelected={selectedFilter === "inProgress"}
        onClick={() => onFilterChange("inProgress")}>
          <div>
            <NumberStyle>{missionCount.inProgress}</NumberStyle>
          </div>
          <span>Missões em andamento</span>
        </StatusInProgressMission>
        <StatusDoneMission isSelected={selectedFilter === "done7days"}
        onClick={() => onFilterChange("done7days")}>
          <div>
            <NumberStyle>{missionCount.done7days}</NumberStyle>
          </div>
          <div>
            <span>Missões concluídas</span>
            <p>(7dias)</p>
          </div>
        </StatusDoneMission>
      </MissionFilterCardContainer>
    </>
  );
}
