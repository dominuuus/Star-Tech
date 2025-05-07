import styled from "styled-components";

export const GreenMissionLevelContainer = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;

`

export const GreenMissionLevelCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  
`
export const GreenMissionMaster = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-right: 8px;

  button {
    display: block;
    border: none;
    background-color:rgb(90, 90, 90);
    cursor: pointer;
    border-radius: 20px;
    width: 120px;
    height: 120px;
  }
  
  span {
    color: black;
    font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
    cursor: pointer;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 20px;
    cursor: pointer;
  }
  
`
export const GreenMissionSecondary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-right: 8px;
  button {
    display: block;
    border: none;
    background-color:rgb(155, 155, 155);
    cursor: pointer;
    border-radius: 20px;
    width: 80px;
    height: 80px;
  }
  
  span {
    color: black;
    font-size: 0.7rem;
    text-align: center;
    font-weight: bold;
  }
`