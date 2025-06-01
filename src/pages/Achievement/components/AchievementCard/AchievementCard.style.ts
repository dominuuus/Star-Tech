import styled from "styled-components";

export const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  gap: 20px;
  align-items: flex-start;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-left: 0;
  }
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
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    min-width: 15rem;
    max-width: 15rem;
    height: 10rem;
    display: flex;
    flex-direction: row;
    gap: 0;
    row-gap: 0;
    padding: 0;
    align-content: center;
    overflow-y: auto;
  }
`;
export const AchievementItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  max-height: 160px;
  min-height: 160px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-height: 120px;
    min-height: 120px;
  }
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
  background: ${(props) => props.theme.colors.secondary};
  padding: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    &:hover {
      transform: none;
    }

    &.active {
      transform: scale(1.05);
    }
  }
`;
