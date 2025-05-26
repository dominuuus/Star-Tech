import styled from "styled-components";

export const CardMissionContainer = styled.div`
  padding: 1rem;
  overflow: auto;
  border-radius: 1rem;
  margin-top: 1rem;

  a {
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 400;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.gray.light};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.news};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.news};
  }
`;

export const CardMissionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 20px;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.white};

  transition:
    color 0.15s,
    background-color 0.15s;

  p {
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize.medium};
  }

  span {
    font-size: ${(props) => props.theme.fontSize.small};
  }

  &:hover {
    background: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  }
`;

export const MissionStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  gap: 3px;
`;

export const SectionFilter = styled.section``;

export const MissionFilterContainer = styled.section`
  padding: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.secondary};
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
    background: ${(props) => props.theme.colors.gray.lighter};

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
    background-color: ${(props) => props.theme.colors.gray.light};
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
  }

  h2 {
    font-size: ${(props) => props.theme.fontSize.extraLarge};
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

export const BoxFilterContainer = styled.section`
  display: flex;
  gap: 5px;
`;

export const ProjectFilterContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export const DateFilterContainer = styled.section`
  display: flex;
  gap: 5px;
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: ${(props) => props.theme.fontSize.medium};
  margin-top: 15px;
  gap: 10px;
`;

export const ConfirmFilterButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
`;
