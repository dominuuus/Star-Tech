import { MainTopMenu } from "../MainTopMenu/MainTopMenu";
import { HeaderContainer } from "./Header.styles";


export function Header() {
    return (
        <HeaderContainer>
            <div>
                <span>Logo</span>
            </div>

            <div>
                <MainTopMenu/>
            </div>

        </HeaderContainer>
    );
    
}