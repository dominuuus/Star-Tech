import images from "../../assets/images";
import { NewsMission } from "../../components/common/NewsMission/NewsMission";
import { MissionUpdatesContent, SpaceshipContainer } from "./Spaceship.styles";

export function Spaceship() {
    return (
        <>
        <SpaceshipContainer>
        <div>
            <h1>Codestar-1</h1>
            <img src={images.nave} alt="" />
        </div>

        <MissionUpdatesContent>
            <NewsMission/>
        </MissionUpdatesContent>


        </SpaceshipContainer>
        </>
    )
}