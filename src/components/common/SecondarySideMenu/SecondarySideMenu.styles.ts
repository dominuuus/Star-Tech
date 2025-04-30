import styled from "styled-components";

export const MenuContainer = styled.div`
    background-color: #09152B;
    opacity: 80%;
    width: 4rem;
    height: 32rem;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    div {
        margin-top: 20px;
    }

`
export const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.6rem;
    
    &:hover {
        cursor: pointer;
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
     
`

export const MenuIcon = styled.span`
   
`

export const MenuBlockOne = styled.div`
    margin-top: 50px;
`

export const MenuBlockTwo = styled.div`
    margin-bottom: 50px;
`