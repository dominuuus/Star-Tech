import styled from "styled-components";

export const GreenMissionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    h4 {
        font-weight: bold;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 40px;
    }
    p {
        font-weight: bold;
        padding-left: 50px;
        padding-right: 50px;
    }

    hr {
        width: 95%;
        margin: 20px auto;
        height: 2.5px;
        background-color: black;
    }
`

export const GreenMissionBar = styled.div`
    background-color: ${(props) => props.theme.colors.gray.light};
    width: 1340px;
    height: 150px;
`

export const GreenMissionDetails = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const ListOfMissionsContainer = styled.div`
    
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
    border-radius: 10px;
    
`
export const GoChallegeButton = styled.div `
    background-color: green;
    color: white;
    font-weight: bold;
    width: 20%;
    height: 2.8rem;
    margin-left: 570px;
    margin-top: 100px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in-out;
    &:hover{
        transform: scale(1.05);

    }
   
`
