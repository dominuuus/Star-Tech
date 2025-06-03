import styled from "styled-components";

export const MissionStatusContainer = styled.div``;

export const MissionStatusContent = styled.div``;

export const FilterMissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid ${(props) => props.theme.colors.gray.light};
`;

export const StatusMissionContainer = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray.light};
    padding: 2px;
    font-size: ${(props) => props.theme.fontSize.medium};
    align-items: center;

    span {
      background-color: ${(props) => props.theme.colors.linkHover};
      border-radius: 10px;
      padding: 4px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export const FilterProjectContainer = styled.div`
  margin-bottom: 15px;
  select {
    height: 2rem;
    border: 0px;
    border-radius: 5px;
    width: 16rem;
    background-color: ${(props) => props.theme.colors.gray.lighter};
  }
`;
