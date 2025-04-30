import images from "../../assets/images";
import planets from "../../assets/planets";
import { NewsMission } from "../../components/common/NewsMission/NewsMission";
import { ExploredPlanetContainer, MissionUpdatesContent, SpaceshipCardContainer, SpaceshipContainer } from "./Spaceship.styles";

export function Spaceship() {
    return (
        <>
        <SpaceshipContainer>
        <div>
            <div>
            <h1>Codestar-1</h1>
            <ExploredPlanetContainer>
                <img src={planets.coreon} alt="" />
                <img src={planets.pyron} alt="" />
                <img src={planets.aeris} alt="" />
                <img src={planets.crystalia} alt="" />
                <img src={planets.verdax} alt="" />
            </ExploredPlanetContainer>
            </div>
            <SpaceshipCardContainer>
                <img src={images.nave} alt="" />
            </SpaceshipCardContainer>
        </div>

        <MissionUpdatesContent>
            <NewsMission/>
        </MissionUpdatesContent>


        </SpaceshipContainer>
        </>
    )
}