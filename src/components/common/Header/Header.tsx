import images from "../../../assets/images";
import { MainTopMenu } from "../MainTopMenu/MainTopMenu";
import { HeaderContainer } from "./Header.styles";


export function Header() {
    return (
        <HeaderContainer>
            <div>
                <img src={images.logo} alt="" />
            </div>

            <div>
                <MainTopMenu/>
            </div>

        </HeaderContainer>
    );
    
}