import { NavLink } from "react-router-dom";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import { MainTopMenuContainer, NavigationContainer, ProfileContainer, SearchContainer } from "./MainTopMenu.styles";
import { MagnifyingGlass } from "phosphor-react";

export function MainTopMenu() {
    return (
        <MainTopMenuContainer>
            <NavigationContainer>
                <nav>
                    <ul>
                    <NavLink to="/" title="Home">
                        Home
                    </NavLink>  
                    <span>Docs</span> 
                    <span>Tutorial</span>
                    <span>Playground</span>  
                    </ul>
                </nav>
            </NavigationContainer>

            <SearchContainer>
                <MagnifyingGlass />
                <input type="text" placeholder="Pesquisar" />
            </SearchContainer>

            <ProfileContainer>
                <ProfileCard/>
            </ProfileContainer>

        </MainTopMenuContainer>
    )
}