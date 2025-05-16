import styled from "styled-components";

export const HeaderContainer = styled.section`
    width: 100vw;
    display: grid;
    grid-template-columns: 10% 90%;
    align-items: center;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    height: 6rem;

    img {
        height: 3rem;
    }
`


export const LogoContainer = styled.div`
    padding: 0 2rem;
` 

export const MainTopMenuContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 20% 40%;
    gap: 2rem;
    align-items: center;
    padding: 0 3rem;
`

export const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;

    ul {
        display: flex;
        flex-direction: row;
        gap: 5rem;
    }

    li {
        list-style: none;
    }
`
