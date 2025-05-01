import styled from "styled-components";

export const SquadStatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
    padding: 1rem;
`
export const MenuStats = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.2rem;

    button {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.tertiary};
        border-radius: 30px;
        padding: 0.8rem 1rem;
        cursor: pointer;
        font-size: 0.80rem;
        font-weight: bold;
        border: 1px solid ${(props) => props.theme.colors.gray.light};
        &:hover {
            background-color: ${(props) => props.theme.colors.tertiary};
            color: ${(props) => props.theme.colors.white};
            border: 1px solid ${(props) => props.theme.colors.tertiary};
        }
    }
`

export const ProjectProgressBar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 10px;
`