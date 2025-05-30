import { Outlet } from "react-router-dom";
import { HeaderNotLogged } from "../../components/common/HeaderNotLogged/HeaderNotLogged";
import {
  HeaderContainer,
  NotLoggedContainer,
  OutletLayout,
} from "./notLoggedLayout.styles";

export function NotLoggedLayout() {
  return (
    <>
      <HeaderContainer>
        <HeaderNotLogged />
      </HeaderContainer>
      <NotLoggedContainer>
        <OutletLayout>
          <Outlet />
        </OutletLayout>
      </NotLoggedContainer>
    </>
  );
}
