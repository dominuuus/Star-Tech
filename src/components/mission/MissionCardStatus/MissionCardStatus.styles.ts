import styled from "styled-components";


export const CardMissionContainer = styled.div`
  display: flex; 
  margin-top: 10px;

  button {
    background-color: #575D6D;
    width: 100%;
    border: none;
    border-radius: 30px;
    height: 7rem;
    padding: 1px;
    align-items: center;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    transition: color 0.15s, background-color 0.15s;
    justify-content: space-between;

  }

  button:hover {
      background: #09152b;
      color: #ffffff;
      
    }
  
  .seta {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }

`

export const CardMissionDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  gap: 25px;
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
  display: Flex;
  flex-direction: column;
  font-weight: bold;

  span {
    display: flex;
    flex-direction: row;
  }
`
