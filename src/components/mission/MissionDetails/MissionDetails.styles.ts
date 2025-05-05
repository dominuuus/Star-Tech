import styled from "styled-components";

export const MissionDetailsContainer = styled.div `

    
`

export const MissionDetailsContent = styled.div `
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
  background-color: ${(props) => props.theme.colors.gray.lighter};
  border-radius: 30px;
  width: 90%;
`
interface ProgressProps {
    width: number;
    background: number;
  }

export const ProgressMissionBarContent = styled.div<ProgressProps> `
  padding: 0.75rem;
  border-radius: 30px;
  align-items: center;
  height: 3rem;
  width: ${props => props.width}%;
`

export const ProjectProgressSuccess = styled(ProgressMissionBarContent)`
  background-color: ${(props) => props.theme.colors.status.green};
`;
export const ProjectProgressAlert = styled(ProgressMissionBarContent)`
  background-color: ${(props) => props.theme.colors.status.yellow};
`;
export const ProjectProgressCritical = styled(ProgressMissionBarContent)`
  background-color: ${(props) => props.theme.colors.status.red};
`;