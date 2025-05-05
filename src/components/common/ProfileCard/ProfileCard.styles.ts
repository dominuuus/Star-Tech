import styled from "styled-components";

export const ProfileCardContainer = styled.div`
    background: ${(props) => props.theme.colors.gradients.profileMenu};
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 10px;
    border-radius: 10px;

    img {
        height: 3;
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
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    align-items: center;
    text-align: center;
    justify-content: center;
`

export const CoinContainer = styled.div`
    display: flex;
    align-items: center;
    
    span {
        color: ${(props) => props.theme.colors.goldCoin};;
        font-weight: bold;
    }
    
    img {
        height: 2.5rem;
    }
`