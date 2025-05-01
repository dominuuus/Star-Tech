import styled from "styled-components";

export const LoginContainer = styled.div`
    height: 100vh;
`

export const HeaderContainer = styled.div`
    top: 0;
`

export const LoginContent = styled.div`
    display: grid;
    grid-template-columns: 900px 200px;
    padding: 20px;
    margin: 40px;
`

export const LoginSectionOne = styled.div`
    text-align: center;
    img {
        height: 30rem;
        border-radius: 30px;
    }
`

export const LoginSectionTwo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;

    span {
        font-size: 1.3rem;
        font-weight: bold;
    }

    button {
        width: 300px;
        background-color: ${(props) => props.theme.colors.primary};;
        color: #fff;

        &:hover {
            background-color: ${(props) => props.theme.colors.primaryHover};
            border: 1px solid ${(props) => props.theme.colors.primary};
            color: #FFF;
        }
    }
`