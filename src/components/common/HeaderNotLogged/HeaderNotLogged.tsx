import { NavLink } from "react-router-dom";
import images from "../../../assets/images";
import { HeaderContainer, MainTopMenuContainer, NavigationContainer, SearchContainer } from "./HeaderNotLogged.styles";


export function HeaderNotLogged() {
    return (
        <HeaderContainer>
            <div>
                <img src={images.logo} alt="" />
            </div>

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
                <input type="text" placeholder="Pesquisar" />
            </SearchContainer>

        </MainTopMenuContainer>

        </HeaderContainer>
    );
    
}