import {
  CoinContainer,
  NotificationCoinContainer,
  NotificationContainer,
  ProfileCardContainer,
  ProfileContent,
} from "./ProfileCard.styles";
import images from "../../../assets/images";
import { Medal } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";

export function ProfileCard() {
  return (
    <>
      <ProfileCardContainer>
        <ProfileContent>
          <img src={images.profile1} alt="" />

          <NavLink to="perfil">
            <div>
              <h1>Matheus</h1>
              <span>@nebula.dev</span>
            </div>{" "}
          </NavLink>
        </ProfileContent>

        <NotificationCoinContainer>
            <NotificationContainer>
              <Link to={"/game/desafios"}>
                <Medal size={20} weight="fill" />
              </Link>
            </NotificationContainer>
            <CoinContainer>
              <img src={images.coin} alt="" />
              <span>1.000</span>
            </CoinContainer>
        </NotificationCoinContainer>
      </ProfileCardContainer>
    </>
  );
}
