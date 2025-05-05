import styled from "styled-components";

export const MissionContainer = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  gap: 2rem;
`;

export const SectionFilter = styled.section`
  summary {
    margin-top: 10px;
  }
`;

export const BoxFilterContainer = styled.section`
  display: flex;
  gap: 5px;
`;

export const DateFilterContainer = styled.section`
  display: flex;
  gap: 5px;
`;

export const MissionCardContainer = styled.section`
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const SectionMissionDetails = styled.section`

`;

export const SectionMissionNotifications = styled.div`
    div {
        background-color: ${(props) => props.theme.colors.secondary};
        height: fit-content;
        border-radius: 10px;
        margin-top: 10px;
    }
`;

export const ProjectFilterContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MissionFilterContainer = styled.section`
  margin-top: 10px;
  div {
    input {
      width: 100%;
      padding: 5px;
      border-radius: 5px;
      border: 2px solid ${(props) => props.theme.colors.gray.light};
      height: 40px;

      &:hover,
      option:focus {
        background: ${(props) => props.theme.colors.gray.lighter};
      }
    }
  }
  select {
    border: 2px solid ${(props) => props.theme.colors.gray.light};
    background: #eee;
    padding: 10px;
    transition: 0.4s;
    border-radius: 5px;
    width: 100%;
    &:hover,
    &:focus {
      background: ${(props) => props.theme.colors.gray.lighter};
    }

    ::picker(select) {
      appearance: base-select;
    }

    &:open::picker-icon {
      rotate: 180deg;
    }
  }

  option {
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    border: 2px solid ${(props) => props.theme.colors.gray.lighter};
    background: ${(props) => props.theme.colors.gray.lighter};
    padding: 10px;
    transition: 0.4s;

    &:first-of-type {
      border-radius: 8px 8px 0 0;
    }

    &:last-of-type {
      border-radius: 0 0 8px 8px;
    }

    &:not(option:last-of-type) {
      border-bottom: none;
    }

    &:nth-of-type(odd) {
      background: #fff;
    }
  }

  h2 {
    font-size: 1.2rem;
  }

  p {
    display: flex;
    gap: 10px;
  }

  label {
    width: fit-content;
    align-self: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  margin-top: 15px;
  gap: 10px;
`;

export const ConfirmFilterButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
`;
