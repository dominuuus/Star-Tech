import { HeaderContainer, MainMenu, Notifications } from "./Header.styles";
import { Bell, ChatCenteredText } from "phosphor-react";


export function Header() {
    return (
        <HeaderContainer>
            <div>
                <span>Logo</span>
            </div>

            <MainMenu>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Docs</li>
                        <li>Tutorial</li>
                        <li>Playground</li>
                    </ul>
                </nav>
            </MainMenu>

            <div>
                <search>Search</search>
            </div>

            <Notifications>
                <span><ChatCenteredText size={32} /></span>
                <span><Bell size={32} /></span>
            </Notifications>

            <div>
                <span>Profile</span>
            </div>
        </HeaderContainer>
    );
    
}