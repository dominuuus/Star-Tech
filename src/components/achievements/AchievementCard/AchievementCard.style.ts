import styled from "styled-components";

export const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  gap: 20px;
  align-items: flex-start;

`;

export const AchievementList = styled.ul`
  min-width: 360px;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  row-gap: 20px;
  padding: 10px;
  list-style: none;
  align-content: start;
  overflow-y: scroll;


  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.gray.light};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.gray.light};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.gray.light};
  }
`;
export const AchievementItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  max-height: 160px;
  min-height: 160px;
`;

export const Badge = styled.button`
  display: flex;
  border: none;
  background: none;
  cursor: pointer;

`;

export const BadgeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  background: #2a2a2a;
  padding: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;
