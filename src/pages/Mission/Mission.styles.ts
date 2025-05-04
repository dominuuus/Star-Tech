import styled from "styled-components";

export const MissionContainer = styled.div`
    display: grid;
    grid-template-columns: 250px 250px 1fr;
    gap: 30px;
    margin-right: 20px;

    h1 {
        font-size: 2rem;
    }

`


export const MissionDetailsContainer = styled.div`

`
export const MissionUpdatesContent = styled.div`
height: 100%;
`

export const MissionStatusContent = styled.div`

`

export const FilterMissionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid ${(props) => props.theme.colors.gray.light};
`

export const StatusMissionContainer = styled.ul`
    display: flex;
    flex-direction: column;

    li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid ${(props) => props.theme.colors.gray.light};
        padding: 2px;
        font-size: 0.8rem;
        align-items: center;


        span {
            background-color: ${(props) => props.theme.colors.linkHover};
            border-radius: 10px;
            padding: 4px;
            font-weight: bold;
            color: ${(props) => props.theme.colors.white};
        }
    }
    
`

export const FilterProjectContainer = styled.div`
    margin-bottom: 15px;
    ul {
        height: 2rem;
        border: 0px;
        border-radius: 5px;
        width: 16rem;
        background-color: ${(props) => props.theme.colors.gray.lighter};
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`