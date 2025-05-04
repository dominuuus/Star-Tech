import { NewsMission } from "../../components/common/NewsMission/NewsMission";
import { MissionDetails } from "../../components/mission/MissionDetails/MissionDetails";
import { MissionStatus } from "../../components/mission/MissionStatus/MissionStatus";
import { MissionContainer, MissionDetailsContainer, MissionUpdatesContent, StatusMissionContainer } from "./Mission.styles";

export function Mission() {
    return (
        <>
        <MissionContainer>
            <StatusMissionContainer>
                <MissionStatus/>
            </StatusMissionContainer>
            
            <MissionDetailsContainer>
                <MissionDetails/>
            </MissionDetailsContainer>
            
            <MissionUpdatesContent>
                <NewsMission maxItems={4}/>
            </MissionUpdatesContent>
        </MissionContainer>
        </>
    )
}