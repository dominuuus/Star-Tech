import { GreenMissionCard } from "../../components/green-mission/GreenMissionCard/GreenMissionCard";
import { GreenMissionLevel } from "../../components/green-mission/GreenMissionLevel/GreenMissionLevel";
import { GreenMissionBar, GreenMissionContainer, GreenMissionDetails, ListOfMissionsContainer, MissionDetailContainer } from "./GreenMission.styles";

export function GreenMission() {
    return (
        <GreenMissionContainer>
            <GreenMissionBar>
                <GreenMissionLevel/>
            </GreenMissionBar>
            
            <GreenMissionDetails>
                <ListOfMissionsContainer>
                    <GreenMissionCard/>
                </ListOfMissionsContainer>

                <MissionDetailContainer>
                    <span>Mission 1</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa excepturi voluptatem nam suscipit fuga eum eius voluptate non, ut porro fugit hic delectus mollitia repellendus, quaerat dolores. Asperiores, odio!</p>
                </MissionDetailContainer>
            </GreenMissionDetails>
        </GreenMissionContainer>
    )
}