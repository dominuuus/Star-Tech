import { ProfileCard } from "../ProfileCard/ProfileCard";
import { MainTopMenuContainer, NavigationContainer, ProfileContainer, SearchContainer } from "./MainTopMenu.styles";

export function MainTopMenu() {
    return (
        <MainTopMenuContainer>
            <NavigationContainer>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Docs</li>
                        <li>Tutorial</li>
                        <li>Playground</li>
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