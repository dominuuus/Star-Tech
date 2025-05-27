import styled from 'styled-components';


export const TabMenuContainer = styled.div`
  width: 250px;
  height: 450px;
  background: ${(props) => props.theme.colors.primary};
  border-right: 1px solid ${(props) => props.theme.colors.gray.light};
  padding: 1rem 0.2rem;
  overflow-y: auto;
  margin-top: 100px;
  margin-left: 15px;
  border-radius: 10px;

  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);

  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.colors.news} transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.news};
    border-radius: 4px;
  }

  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    position: absolute;
    z-index: 1000;
    height: 100vh;
    left: -100%;
    background-color: ${(props) => props.theme.colors.secondary};
    box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
  }
`;


export const TabMenuItem = styled.div<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border-left: 3px solid
    ${({ active, theme }) => (active ? theme.colors.news : 'transparent')};
  transition: all 0.2s ease;
  margin-right: 1rem;

  &:hover {
    color: #646cff;
    border-left: 3px solid ${({ theme }) => theme.colors.news};
  }
`;


