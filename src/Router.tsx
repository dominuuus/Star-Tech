import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout/defaultLayout";
import { Astronaut } from "./pages/Astronaut/Astronaut";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Astronaut/>} />
            </Route>
        </Routes>
    )

}