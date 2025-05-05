import styled from "styled-components";

export const MissionContainer = styled.div`
    display: grid;
    grid-template-columns: 250px 2fr 1fr;
    gap: 30px;
    margin-right: 20px;

    h1 {
        font-size: 2rem;
    }

`

export const StatusMissionContainer = styled.div`
    background-color: ${(props) => props.theme.colors.gray.light};
`

export const MissionDetailsContainer = styled.div`
    background-color: ${(props) => props.theme.colors.gray.light};
`
export const MissionUpdatesContent = styled.div`
height: 100%;
`