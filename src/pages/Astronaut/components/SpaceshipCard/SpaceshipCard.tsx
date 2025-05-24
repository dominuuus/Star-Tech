import images from "../../../../assets/images";
import { SpaceshipCardContainer } from "./SpaceshipCard.styles";

export function SpaceshipCard() {
    return (
        <>
        <SpaceshipCardContainer>
            <img src={images.nave} alt="" />
        </SpaceshipCardContainer>
        </>
    )
}