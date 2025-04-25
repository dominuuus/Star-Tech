import styled from "styled-components";

export const MissionCardContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 37px;
  padding: 10px;
  align-items: center;
  div {
    margin-right: 20px;
  }
`;

export const MissionCardInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 8;
  margin-left: 20px;
  gap: 5px;
  div {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
  }
  p {font-size: 0.75rem;};
`;

export const MissionCardTitle = styled.section`
  display: flex;
  flex-direction: column;
  font-weight: bold;


`