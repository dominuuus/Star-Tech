import { CalendarCheck, CaretCircleRight } from "phosphor-react";
import {
  MissionCardContainer,
  MissionCardContent,
  MissionCardInfoContent,
  MissionCardTitle,
} from "./MissionCard.styles";

import { fetchMission, Mission } from "../../../services/missionService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface MissionCardProps {
  selectedFilter: string;
}

export function MissionCard({ selectedFilter }: MissionCardProps) {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    fetchMission().then(setMissions).catch(console.error);
  }, []);

  const filterMissions = (missions: Mission[]) => {
    switch (selectedFilter) {
      case "late":
        return missions.filter((m) => m.Status === "Atrasada");
      case "inProgress":
        return missions.filter((m) => m.Status === "Em Progresso");
      case "done7days":
        return missions.filter((m) => {
          if (!m.Data_Conclusão) return false;
          const doneDate = new Date(m.Data_Conclusão);
          const sevenDaysLater = new Date();
          sevenDaysLater.setDate(sevenDaysLater.getDate() - 7);
          return doneDate >= sevenDaysLater;
        });
      case "all":
      default:
        return missions;
    }
  };

  const selectedMissions = filterMissions(missions);

  return (
    <>
      <MissionCardContainer>
        {selectedMissions.map((mission) => (
          <Link to={`/game/missoes/${mission.Id}`} key={mission.Id} >
          <MissionCardContent>
            <MissionCardInfoContent>
              <MissionCardTitle>
                <span>{mission.Nome}</span>
                <span>Projeto: {mission.Projeto_Nome}</span>
              </MissionCardTitle>
              <div>
                <CalendarCheck size={15} weight="fill" />
                <p>
                  {(selectedFilter !== "done7days" &&
                    ` ${mission.Data_Prazo} - ${mission.relativeDueDate}`) ||
                    (selectedFilter === "done7days" &&
                      ` ${mission.Concluído_em}`)}
                </p>
              </div>
            </MissionCardInfoContent>
            <div>
              <CaretCircleRight size={32} weight="fill" />
            </div>
          </MissionCardContent>
          </Link>
        ))}
      </MissionCardContainer>
    </>
  );
}
