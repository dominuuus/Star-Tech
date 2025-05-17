import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout/defaultLayout";
import { Astronaut } from "./pages/Astronaut/Astronaut";
import { Achievement } from "./pages/Achievement/Achievement";
import { Explore } from "./pages/Explore/Explore";
import { Hangar } from "./pages/Hangar/Hangar";
import { Spaceship } from "./pages/Spaceship/Spaceship";
import { Mission } from "./pages/Mission/Mission";
import { LoginIn } from "./pages/LoginIn/LoginIn";
import { GreenMission } from "./pages/GreenMission/GreenMission";
import { UserPage } from "./pages/UserPublicProfile/UserPublicProfile";
import { EditProfile } from "./pages/EditProfile/EditProfile";

export function Router() {
  return (
    <Routes>
      <Route path="game" element={<DefaultLayout />}>
        <Route path="logged" element={<Astronaut />} />
        <Route path="piloto" element={<Astronaut />} />
        <Route path="conquistas" element={<Achievement />} />
        <Route path="perfil" element={<EditProfile />} />
        <Route path="missoes" element={<Mission />}>
          <Route path=":id" element={<Mission />} />
        </Route>
       <Route path="explorar" element={<Explore />} />
        <Route path="oficina" element={<Hangar />} />
        <Route path="nave" element={<Spaceship />} />
        <Route path="desafios" element={<GreenMission />} />
      </Route>

      <Route path="/usuarios/:id" element={<UserPage />} />

      <Route path="/" element={<LoginIn />}>
        <Route path="404" element={<Astronaut />} />
      </Route>
    </Routes>
  );
}
