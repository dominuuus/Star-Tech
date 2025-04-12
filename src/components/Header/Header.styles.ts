import styled from "styled-components";

export const HeaderContainer = styled.section`
    background-color: #000;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
    align-items: center;
    padding: 10px 20px;
    color: #fff;
`

export const MainMenu = styled.div`
    li {
        list-style: none;
        display: inline-block;
        margin: 0 10px;
    }
`

export const Notifications = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`