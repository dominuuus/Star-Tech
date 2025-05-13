import { styled } from "styled-components";

export const Cards = styled.div`
    background-color: ${(props) => props.theme.colors.gray.light};
    padding: 20px;
    padding-left: 60px;
    border-radius: 7px;
    font-weight: bold;
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.05);
        background-color: ${(props) => props.theme.colors.primary};
        color: white;
    }
`
