import styled from "styled-components";

export const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 20px;
  height: calc(100vh - 150px);
  gap: 20px;
  align-items: flex-start; 
`;


export const AchievementList = styled.ul`
  width: 30%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  row-gap: 20px;
  padding: 10px;
  list-style: none;
  overflow-y: auto;
  align-content: start; 
 overflow-y: scroll; 
  
  
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(136, 136, 136, 0.5);
    border-radius: 5px;
    border: 3px solid transparent;
    background-clip: content-box;
  }
`;
;

export const AchievementItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1 / 1; 
  max-height: 160px;
  min-height: 160px;
`;


export const Badge = styled.button`
  display: flex;
  border: none;
  background: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
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


