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
        background-color: #ffffff;
        color: #082751;
        border-radius: 30px;
        padding: 0.8rem 1rem;
        cursor: pointer;
        font-size: 0.80rem;
        font-weight: bold;
        border: 2.2px solid #082751;
        &:hover {
            background-color: #082751;
            color: #ffffff;
            border: 1px solid #082751;
        }
    }
`

export const ProjectProgressBar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 10px;
`