import { MissionCardStatus } from "../../components/mission/MissionCardStatus/MissionCardStatus";
import { MissionDetails } from "../../components/mission/MissionDetails/MissionDetails";
import {
  FilterMissionContainer,
  FilterProjectContainer,
  MissionContainer,
  MissionDetailsContainer,
  MissionStatusContent,
  StatusMissionContainer,
} from "./Mission.styles";

export function Mission() {
  return (
    <>
      <MissionContainer>
        <StatusMissionContainer>
          <MissionStatusContent>
            <span>Status das missões</span>
            <hr />

            <FilterMissionContainer>
              <StatusMissionContainer>
                <li>
                  Missões em andamento
                  <span>4</span>
                </li>
                <li>
                  Missões atrasadas
                  <span>2</span>
                </li>
                <li>
                  Missões não iniciadas
                  <span>10</span>
                </li>
              </StatusMissionContainer>
            </FilterMissionContainer>

            <FilterProjectContainer>
              <span>Filtro por projeto</span>
              <hr />
              <input list="project" />

              <datalist id="project">
                <option value="BB Cash"></option>
                <option value="Open Finance"></option>
                <option value="BB Investimento"></option>
                <option value="BB Financiamento"></option>
                <option value="CDB DI"></option>
              </datalist>

              <div>
              <span>Filtro por período</span>
              <hr />
                <label>Data de início:</label>
                <input type="date" id="data_inicio" name="data_inicio" />

                <label>Data final:</label>
                <input type="date" id="data_fim" name="data_fim" />

                <input type="range" min="0" max="100" value="30"></input>
              </div>
            </FilterProjectContainer>
          </MissionStatusContent>
        </StatusMissionContainer>

        <StatusMissionContainer>
          <span>Lista das missões</span>
          <hr />
          <MissionCardStatus />
        </StatusMissionContainer>

        <MissionDetailsContainer>
          <MissionDetails />
        </MissionDetailsContainer>
      </MissionContainer>
    </>
  );
}
