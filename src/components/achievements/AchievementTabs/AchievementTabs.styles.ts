// AchievementTab/style.ts
import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  justify-content: center; // centraliza horizontalmente
  margin: 32px 0;
  gap: 20px;
`;

export const TabButton = styled.button<{ active?: boolean }>`
  width: 200px;
  height: 48px;
  padding: 12px; 0;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#D8A214' : '#09152B')};
  color: white;

  &:hover {
    opacity: 0.8;
  }

  transition: 0.2s ease;
`;
