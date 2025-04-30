import styled from "styled-components";

export const ProjectProgressContainer = styled.div`
display: flex;
gap: 10px;
align-items: center;
span {
    font-weight: bold;
    text-wrap: nowrap;

}
`
export const ProjectProgressDefault = styled.div`
background-color:rgb(239, 239, 239);
border-radius: 30px;
width: 90%;


`

const ProjectProgressStatus = styled.div`
padding: 0.75rem;
border-radius: 30px;
align-items: center;

`

export const ProjectProgressSuccess = styled(ProjectProgressStatus)`
background-color: #38C541;
width: 80%;
`
export const ProjectProgressAlert = styled(ProjectProgressStatus)`
background-color: #E0EF38;
width: 50%;
`
export const ProjectProgressCritical = styled(ProjectProgressStatus)`
background-color: #DB2F2F;
width: 20%;
`
