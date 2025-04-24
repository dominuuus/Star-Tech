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
        background-color: #000000;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        font-size: 0.75rem;
        border: 1px solid #000000;
        &:hover {
            background-color: #ffffff;
            color: #000000;
            border: 1px solid #000000;
        }
    }
`

export const ProjectProgressBar = styled.div`
    display: flex;
    flex-direction: column;
    background-color:rgb(234, 230, 230);
    padding: 0.5rem;
    progress {
        height: 1rem;
        width: 100%;
        border-radius: 10px;
        background-color: #000000;
        color: #000000;
        margin-bottom: 0.5rem;
    }
`