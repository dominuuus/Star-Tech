import styled from "styled-components";

export interface ButtonProps {
  $isSelected?: boolean;
}

export const SquadStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  padding: 1rem;
`;
export const MenuStats = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
`;

export const ButtonStatus = styled.div<ButtonProps>`
  background: ${(props) =>
    props.$isSelected ? props.theme.colors.tertiary : props.theme.colors.white};
  color: ${(props) =>
    props.$isSelected ? props.theme.colors.white : props.theme.colors.tertiary};

  border-radius: 30px;
  padding: 0.8rem 1rem;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: bold;

  transition:
    color 0.15s,
    background-color 0.15s;

  &:hover {
    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const ProjectProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 10px;
  height: 20rem;

  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    display: none;
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
