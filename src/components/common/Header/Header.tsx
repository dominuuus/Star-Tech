import images from "../../../assets/images";
import { MainTopMenu } from "../MainTopMenu/MainTopMenu";
import { HeaderContainer, LogoContainer, TopMenuContainer } from "./Header.styles";


export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <img src={images.logo} alt="" />
            </LogoContainer>

            <TopMenuContainer>
                <MainTopMenu/>
            </TopMenuContainer>

        </HeaderContainer>
    );
    
}