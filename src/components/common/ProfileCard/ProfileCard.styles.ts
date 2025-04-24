import styled from "styled-components";

export const ProfileCardContainer = styled.div`
    background: linear-gradient(90deg,rgba(63, 97, 220, 1) 0%, rgba(56, 229, 250, 1) 100%);
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 10px;
    border-radius: 10px;

    img {
        height: 4rem;
        border-radius: 0.5rem;
    }
`

export const ProfileContent = styled.div`
    display: flex;
    width: 13rem;
    align-items: center;
    gap: 10px;

    h1 {
        font-size: 1rem;
        font-weight: bold;
    }

    div {
        display: flex;
        flex-direction: column;
    }
`

export const NotificationContainer = styled.div`
    background-color: #09152B;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    align-items: center;
    text-align: center;
`

export const CoinContainer = styled.div`
    display: flex;
    align-items: center;
    
    span {
        color: #D8A214;
        font-weight: bold;
    }
    
    img {
        height: 2.5rem;
    }
`