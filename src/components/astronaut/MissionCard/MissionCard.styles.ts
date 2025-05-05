import styled from "styled-components";

export const MissionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: 0.75rem;
  }
`;

export const MissionCardContent = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 37px;
  padding: 10px;
  align-items: center;

  box-shadow:
    3px 3px 5px rgba(0, 0, 0, 0.1),
    1px 1px 2px rgba(255, 255, 255, 0.8);
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
  p {
    font-size: 0.7rem;
  }


`;

export const MissionCardTitle = styled.section`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;
