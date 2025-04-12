import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import {
  DefaultLayoutContainer,
  DefaultLayoutContent,
  MenuLayout,
  OutletLayout,
  
} from "./defaultLayout.styles";
import { Menu } from "../../components/Menu/Menu";

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <DefaultLayoutContent>
        <MenuLayout>
          <Menu />
        </MenuLayout>
        <OutletLayout>
          <Outlet />
        </OutletLayout>
      </DefaultLayoutContent>
    </DefaultLayoutContainer>
  );
}
