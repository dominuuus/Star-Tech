import { MissionCard } from "../../astronaut/MissionCard/MissionCard"
import { NewsContainer } from "./NewsMission.styles"

export function NewsMission() {
    return (
        <>
        <MissionCard/>
        <NewsContainer>
        <span>News 1</span>
        <span>News 2</span>
        </NewsContainer>
        </>
    )
}