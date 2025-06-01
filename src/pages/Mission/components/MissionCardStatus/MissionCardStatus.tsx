import { useEffect, useRef, useState } from "react";
import {
  BoxFilterContainer,
  ButtonsContainer,
  CardMissionContainer,
  CardMissionContent,
  ConfirmFilterButton,
  DateFilterContainer,
  MissionFilterContainer,
  MissionStatusContainer,
  ProjectFilterContainer,
  SectionFilter,
} from "./MissionCardStatus.styles";

import {
  CaretCircleRight,
  CalendarCheck,
  MagnifyingGlass,
} from "phosphor-react";
import { fetchMission, Mission } from "../../../../services/missionService";
import { Link } from "react-router-dom";

interface Filters {
  status: string;
  project: string;
  dataInicio: string;
  dataFim: string;
}

export function MissionCardStatus() {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [filters, setFilters] = useState<Filters>({
    status: "late",
    project: "",
    dataInicio: "",
    dataFim: "",
  });
  const [appliedFilters, setAppliedFilters] = useState<Filters>({
    status: "late",
    project: "",
    dataInicio: "",
    dataFim: "",
  });
  useEffect(() => {
    fetchMission().then(setMissions).catch(console.error);
  }, []);

  const statusRef = useRef<HTMLSelectElement>(null);
  const projectRef = useRef<HTMLInputElement>(null);
  const dataInicioRef = useRef<HTMLInputElement>(null);
  const dataFimRef = useRef<HTMLInputElement>(null);

  const filterMissions = (missions: Mission[]): Mission[] => {
    return missions.filter((mission) => {
      if (appliedFilters.status && appliedFilters.status !== "all") {
        let statusLabel: string;
        switch (appliedFilters.status) {
          case "late":
            statusLabel = "Atrasada";
            break;
          case "inProgress":
            statusLabel = "Em Progresso";
            break;
          case "pending":
            statusLabel = "Não iniciada";
            break;
          case "done":
            statusLabel = "Concluída";
            break;
          default:
            statusLabel = "";
        }
        if (mission.Status !== statusLabel) {
          return false;
        }
      }

      if (
        appliedFilters.project &&
        mission.Projeto_Nome !== appliedFilters.project
      ) {
        return false;
      }

      return true;
    });
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmFilters = () => {
    setAppliedFilters({ ...filters });
  };

  const handleClearFilters = () => {
    const defaultFilters: Filters = {
      status: "late",
      project: "",
      dataInicio: "",
      dataFim: "",
    };
    setFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
    if (statusRef.current) statusRef.current.value = "late";
    if (projectRef.current) projectRef.current.value = "";
    if (dataInicioRef.current) dataInicioRef.current.value = "";
    if (dataFimRef.current) dataFimRef.current.value = "";
  };

  const selectedMissions = filterMissions(missions);

  return (
    <>
      <SectionFilter>
        <MissionFilterContainer>
          <details>
            <summary>Filtrar missões</summary>
            <BoxFilterContainer>
              <select
                name="status"
                ref={statusRef}
                value={filters.status}
                onChange={handleFilterChange}
              >
                <option value="all">Todas</option>
                <option value="late">Missões atrasadas</option>
                <option value="inProgress">Missões em andamento</option>
                <option value="pending">Missões não iniciadas</option>
                <option value="done">Missões concluídas</option>
              </select>
            </BoxFilterContainer>

            <ProjectFilterContainer>
              <div>
                <MagnifyingGlass size={15} />
                <span>Filtro por projeto</span>
              </div>

              <div>
                <input
                  name="project"
                  list="project"
                  ref={projectRef}
                  value={filters.project}
                  onChange={handleFilterChange}
                />
                <datalist id="project">
                  <option value="BB Cash"></option>
                  <option value="Open Finance"></option>
                  <option value="BB Investimento"></option>
                  <option value="BB Financiamento"></option>
                  <option value="CDB DI"></option>
                </datalist>
              </div>
            </ProjectFilterContainer>

            <DateFilterContainer>
              <div>
                <label htmlFor="data_inicio">Data inicial:</label>
                <input
                  type="date"
                  id="data_inicio"
                  name="dataInicio"
                  ref={dataInicioRef}
                  value={filters.dataInicio}
                  onChange={handleFilterChange}
                />
              </div>

              <div>
                <label htmlFor="data_fim">Data final:</label>
                <input
                  type="date"
                  id="data_fim"
                  name="dataFim"
                  ref={dataFimRef}
                  value={filters.dataFim}
                  onChange={handleFilterChange}
                />
              </div>
            </DateFilterContainer>

            <ButtonsContainer>
              <button onClick={handleClearFilters}>Limpar filtros</button>
              <ConfirmFilterButton onClick={handleConfirmFilters}>
                Filtrar
              </ConfirmFilterButton>
            </ButtonsContainer>
          </details>
        </MissionFilterContainer>

        <CardMissionContainer>
          <details open>
            <summary>Lista de missões</summary>
            {selectedMissions.length === 0 ? (
              <p>Nenhuma missão encontrada.</p>
            ) : (
              selectedMissions.map((mission) => (
                <Link to={`/game/missoes/${mission.id}`} key={mission.id}>
                  <CardMissionContent>
                    <div>
                      <div>
                        <p>{mission.Nome}</p>
                        <p>Projeto: {mission.Projeto_Nome || "Sem projeto"}</p>
                      </div>
                      <MissionStatusContainer>
                        <CalendarCheck size={15} weight="fill" />
                        <span>{mission.Status}</span>
                      </MissionStatusContainer>
                    </div>
                    <div>
                      <CaretCircleRight size={32} weight="fill" />
                    </div>
                  </CardMissionContent>
                </Link>
              ))
            )}
          </details>
        </CardMissionContainer>
      </SectionFilter>
    </>
  );
}
