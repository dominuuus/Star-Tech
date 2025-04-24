import { Outlet } from "react-router-dom";
import { Header } from "../../components/common/Header/Header";
import {
  DefaultLayoutContainer,
  DefaultLayoutContent,
  MenuLayout,
  OutletLayout,
  
} from "./defaultLayout.styles";
import { SecondarySideMenu } from "../../components/common/SecondarySideMenu/SecondarySideMenu";

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <DefaultLayoutContent>
        <MenuLayout>
          <SecondarySideMenu />
        </MenuLayout>
        <OutletLayout>
          <Outlet />
        </OutletLayout>
      </DefaultLayoutContent>
    </DefaultLayoutContainer>
  );
}
