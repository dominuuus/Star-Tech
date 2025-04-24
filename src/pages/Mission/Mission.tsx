import { NewsMission } from "../../components/common/NewsMission/NewsMission";
import { MissionContainer, MissionUpdatesContent } from "./Mission.styles";

export function Mission() {
    return (
        <>
        <MissionContainer>
            <h1>Missões</h1>
            <MissionUpdatesContent>
                <NewsMission/>
            </MissionUpdatesContent>
        </MissionContainer>
        </>
    )
}