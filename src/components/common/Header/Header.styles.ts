import styled from "styled-components";

export const HeaderContainer = styled.section`
    width: 100vw;
    display: grid;
    grid-template-columns: 10% 90%;
    align-items: center;
    padding: 10px;
    background: ${(props) => props.theme.colors.primary};
    
    color: white;
    height: 5rem;

    img {
        height: 3rem;
    }
`

export const LogoContainer = styled.div`
    padding: 0 2rem;
` 

export const TopMenuContainer = styled.div`
    padding: 0 3rem;
` 