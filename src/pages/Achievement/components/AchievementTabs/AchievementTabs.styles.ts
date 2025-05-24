import styled from 'styled-components';

interface AchievementTabsProps {
  $active: boolean;
}
export const TabContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20px 0 10px 34px;
  gap: 8px;
`;

export const TabButton = styled.button<AchievementTabsProps>`
  width: 110px;
  height: 36px;
  padding: 8px 0;
  border-radius: 8px;
  border: none;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: bold;
  cursor: pointer;
  background-color: ${($active) => ($active ? '#D8A214' : '#09152B')};
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  transition: all 0.2s ease;
`;