import styled from "styled-components";

export const LoginInContainer = styled.section`
    background: ${(props) => props.theme.colors.gradients.bgLoginIn};
    height: 100vh;
`

export const LoginInContent = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    height: 86vh;
`

export const AuthSection = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.white};
    margin-left: 900px;
    margin-top: 300px;

    span {
        font-size: 1.3rem;
        font-weight: bold;
    }

    button {
        width: 12rem;
        background: ${(props) => props.theme.colors.primary};;
        color: ${(props) => props.theme.colors.white};
        border: 0px;

        &:hover {
            background: ${(props) => props.theme.colors.gradients.tripulation};
            color: ${(props) => props.theme.colors.white};
            border: 0px;
        }
    }
`