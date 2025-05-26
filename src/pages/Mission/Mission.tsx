import {
  MissionContainer,
  SectionFilter,
  SectionMissionDetails,
  SectionMissionNotifications,
} from "./Mission.styles";
import { MissionDetails } from "./components/MissionDetails/MissionDetails";
import { NewsMission } from "../../components/common/NewsMission/NewsMission";
import { MissionCardStatus } from "./components/MissionCardStatus/MissionCardStatus";

export function Mission() {
  return (
    <>
      <MissionContainer>
        <SectionFilter>
          <MissionCardStatus />
        </SectionFilter>

        <SectionMissionDetails>
          <MissionDetails />
        </SectionMissionDetails>

        <SectionMissionNotifications>
          <div><span>🛰️Radar de transmissões</span></div>
          <div>
            <NewsMission maxItems={7} />
          </div>
        </SectionMissionNotifications>
      </MissionContainer>
    </>
  );
}
