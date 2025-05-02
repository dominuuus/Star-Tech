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
    h4.Progresso {
        padding-top: 90px;
    }
    li {
        padding-left: 30px;
    }
    p {
        font-size: 10px;
        padding-bottom: 10px;
    }
   
`
export const ProgressContainer = styled.div `

`
export const ProgressMissionBar = styled.div `
    background-color: #efefef;
    border-radius: 30px;
    width: 40%;
    height: 60px; 
    position: relative;
    overflow: hidden;
  
`
interface ProgressProps {
    width: string;
  }
export const ProgressMissionBarContent = styled.div<ProgressProps> `
    background-color: red;
    width: ${(props) => props.width}; 
    height: 100%;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-size: 10px;
`