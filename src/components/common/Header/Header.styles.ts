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