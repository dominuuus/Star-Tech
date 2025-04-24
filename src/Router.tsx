import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout/defaultLayout";
import { Astronaut } from "./pages/Astronaut/Astronaut";
import { Achievement } from "./pages/Achievement/Achievement";
import { Explore } from "./pages/Explore/Explore";
import { Hangar } from "./pages/Hangar/Hangar";
import { Spaceship } from "./pages/Spaceship/Spaceship";
import { Mission } from "./pages/Mission/Mission";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Astronaut/>} />
                <Route path="piloto" element={<Astronaut/>} />
                <Route path="conquistas" element={<Achievement/>} />
                <Route path="missoes" element={<Mission/>} />
                <Route path="explorar" element={<Explore/>} />
                <Route path="oficina" element={<Hangar/>} />
                <Route path="nave" element={<Spaceship/>} />
            </Route>
        </Routes>
    )

}