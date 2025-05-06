import { CoinContainer, NotificationContainer, ProfileCardContainer, ProfileContent } from "./ProfileCard.styles";
import images from "../../../assets/images";
import { Bell } from "phosphor-react";

export function ProfileCard() {
    return (
        <>
        <ProfileCardContainer>
            <ProfileContent>
                <img src={images.profile1} alt="" />
                <div>
                    <h1>Matheus</h1>
                    <span>@nebula.dev</span>
                </div>
            </ProfileContent>

            <NotificationContainer>
                <Bell size={20} weight="fill" />
            </NotificationContainer>

            <CoinContainer>
                <img src={images.coin} alt="" />
                <span>1.000</span>
            </CoinContainer>
        </ProfileCardContainer>
        </>
    )
}