import { NavLink } from "react-router-dom";
import images from "../../../assets/images";
import { HeaderContainer, LogoContainer, MainTopMenuContainer, NavigationContainer } from "./HeaderNotLogged.styles";


export function HeaderNotLogged() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <NavLink to="/"><img src={images.logo} alt="" /></NavLink>
            </LogoContainer>

            <MainTopMenuContainer>
            <NavigationContainer>
                <nav>
                    <ul>
                    <NavLink to="/sobre" title="Home">
                        Sobre
                    </NavLink>  
                    <NavLink to="/docs" title="Documentação">
                        Docs
                    </NavLink> 
                    </ul>
                </nav>
            </NavigationContainer>


        </MainTopMenuContainer>

        </HeaderContainer>
    );
    
}