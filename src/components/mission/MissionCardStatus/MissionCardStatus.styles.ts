import styled from "styled-components";


export const CardMissionContainer = styled.div`
  display: flex; 
  margin-top: 10px;

  button {
    background-color: #575D6D;
    border: none;
    width: 100%;
    border-radius: 30px;
    height: 7rem;
    padding: 1px;
    align-items: center;
    color: #ffffff;
    display: flex;
    flex-direction: row;
  }
  
  .seta {
    align-items: center;
    justify-content: center;
    margin-left: 30px;
  }

`

export const CardMissionDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  gap: 5px;
  font-size: 0.75rem;

  .calendar {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }
  p {
    font-size: 0.75rem;
    font-weight: bold;
  }
`

export const TitleMission = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;

  span {
    display: flex;
    flex-direction: row;
  }
`
