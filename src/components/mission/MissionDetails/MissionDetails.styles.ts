import styled from "styled-components";

export const MissionDetailsContainer = styled.div `
    background-color: white;
    padding-top: 70px;
    
`
export const MissionDetailsHead = styled.div `
    display: flex;
    flex-direction: row;
    gap: 350px;
`
export const MissionTitle  = styled.div `
    display: flex;
    flex-direction: column; 
    font-weight: bold;
    width : 45%;
`
export const MissionDeadLine = styled.div `
    font-size: 10px;
    display: flex;
    flex-direction: column;
    width: 55%;
`
export const MissionDetailsBody = styled.div `
    padding-top: 25px;
    h4 {
        padding-top: 25px;
        font-weight: bold;
    }
    li {
        padding-left: 30px;
    }
`