import { NavLink } from "react-router-dom";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import { MainTopMenuContainer, NavigationContainer, ProfileContainer, SearchContainer } from "./MainTopMenu.styles";

export function MainTopMenu() {
    return (
        <MainTopMenuContainer>
            <NavigationContainer>
                <nav>
                    <ul>
                    <NavLink to="/" title="Home">
                        Home
                    </NavLink>  
                    <NavLink to="docs" title="Documentos">
                        Docs
                    </NavLink> 
                    <NavLink to="tutorial" title="Tutorial">
                        Tutorial
                    </NavLink> 
                    <NavLink to="playground" title="Playground">
                        Playground
                    </NavLink> 
                    </ul>
                </nav>
            </NavigationContainer>

            <SearchContainer>
                <input type="text" placeholder="Pesquisar" />
            </SearchContainer>

            <ProfileContainer>
                <ProfileCard/>
            </ProfileContainer>

        </MainTopMenuContainer>
    )
}