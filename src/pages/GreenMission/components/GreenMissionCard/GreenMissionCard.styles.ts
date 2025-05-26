import { styled } from "styled-components";

interface CardProps {
  $progress: number;
  $isSelected?: boolean;
}

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  padding: 20px;
  font-weight: 600;
  transition: transform 0.2s ease-in-out;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.secondary};
  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const TitleCard = styled.div<CardProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.large};
  justify-content: space-between;
  padding: 10px;
  background-color: ${(props) =>
    props.$isSelected
      ? 'transparent'
      : 'transparent'};
`;

export const ChallengeTitle = styled.div`
  min-width: 90%;
`

export const ChallengeIcon = styled.div`
  width: 3rem;
  display: flex;
  justify-content: right;
`