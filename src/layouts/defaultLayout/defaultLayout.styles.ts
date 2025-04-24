import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`

export const DefaultLayoutContent = styled.div`
    margin-top: 20px;
    display: flex;
    grid-template-columns: 10% 90%;

`

export const MenuLayout = styled.div`
    position: fixed;
`

export const OutletLayout = styled.div`
    position: relative;
    margin-left: 10%;
    max-width: 85%;
`