import { MagnifyingGlass } from "phosphor-react";
import { MissionCardStatus } from "../../components/mission/MissionCardStatus/MissionCardStatus";
import {
  BoxFilterContainer,
  ButtonsContainer,
  ConfirmFilterButton,
  DateFilterContainer,
  MissionCardContainer,
  MissionContainer,
  MissionFilterContainer,
  ProjectFilterContainer,
  SectionFilter,
  SectionMissionDetails,
  SectionMissionNotifications,
} from "./Mission.styles";
import { MissionDetails } from "../../components/mission/MissionDetails/MissionDetails";
import { NewsMission } from "../../components/common/NewsMission/NewsMission";

export function Mission() {
  return (
    <>
      <MissionContainer>
        <SectionFilter>
          <details open>
            <summary>Filtros das missões</summary>
            <MissionFilterContainer>
              <BoxFilterContainer>
                <select>
                  <button></button>
                  <option value="late">
                    <span>Missões atrasadas</span>
                  </option>
                  <option value="inProgress">
                    <span>Missões em andamento</span>
                  </option>
                  <option value="pending">
                    <span>Missões não iniciadas</span>
                  </option>
                  <option value="done">
                    <span>Missões concluídas</span>
                  </option>
                </select>
              </BoxFilterContainer>

              <ProjectFilterContainer>
                <div>
                  <MagnifyingGlass size={15} />
                  <span>Filtro por projeto</span>
                </div>

                <div>
                  <input list="project" />
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
                  <label>Data inicial:</label>
                  <input type="date" id="data_inicio" name="data_inicio" />
                </div>

                <div>
                  <label>Data final:</label>
                  <input type="date" id="data_fim" name="data_fim" />
                </div>
              </DateFilterContainer>

              <ButtonsContainer>
                <button>Limpar filtros</button>
                <ConfirmFilterButton>Confirmar</ConfirmFilterButton>
              </ButtonsContainer>
            </MissionFilterContainer>
          </details>

          <details open>
            <summary>Lista de missões</summary>
            <MissionCardContainer>
              <MissionCardStatus />
            </MissionCardContainer>
          </details>
        </SectionFilter>

        <SectionMissionDetails>
          <MissionDetails />
        </SectionMissionDetails>

        <SectionMissionNotifications>
          <span>Comunicado de missões</span>
          <hr />
          <div>
            <NewsMission maxItems={5}/>
          </div>
        </SectionMissionNotifications>
      </MissionContainer>
    </>
  );
}
