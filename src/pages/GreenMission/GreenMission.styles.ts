import styled from "styled-components";

export const GreenMissionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const GreenMissionBar = styled.div`
    background-color: ${(props) => props.theme.colors.gray.light};
    height: 150px;
`

export const GreenMissionDetails = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const ListOfMissionsContainer = styled.div`
    background-color: ${(props) => props.theme.colors.gray.light};
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 40rem;
`

export const MissionDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${(props) => props.theme.colors.gray.light};
    margin-right: 40px;
`