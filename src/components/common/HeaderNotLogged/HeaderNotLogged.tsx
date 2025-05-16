import { NavLink } from "react-router-dom";
import images from "../../../assets/images";
import { HeaderContainer, LogoContainer, MainTopMenuContainer, NavigationContainer } from "./HeaderNotLogged.styles";


export function HeaderNotLogged() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <img src={images.logo} alt="" />
            </LogoContainer>

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


        </MainTopMenuContainer>

        </HeaderContainer>
    );
    
}