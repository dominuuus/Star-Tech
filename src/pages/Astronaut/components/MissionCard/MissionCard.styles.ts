import styled from "styled-components";

export const MissionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: ${(props) => props.theme.fontSize.medium};
  }

  a {
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 400;
  }
`;

export const MissionCardContent = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.gray.light};
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 10px;
  height: 6rem;
  align-items: center;
  transition:
    color 0.15s,
    background-color 0.15s;
  
  div {
    margin-right: 20px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.white};
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
    font-size: ${(props) => props.theme.fontSize.medium};
  }
`;

export const MissionCardTitle = styled.section`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;
