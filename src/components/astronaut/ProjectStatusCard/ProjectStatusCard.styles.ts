import styled from "styled-components";

interface ButtonProps {
  isSelected?: boolean;
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
  background: ${(props) => (props.isSelected ? props.theme.colors.linkHover : props.theme.colors.white)};
  color: ${(props) => props.theme.colors.primary};
  border-radius: 30px;
  padding: 0.8rem 1rem;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.colors.gray.light};
  
  &:hover {
    background-color: ${(props) => props.theme.colors.linkHover};
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.linkHover};
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
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.gray.light};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.primary};
  }
`;
