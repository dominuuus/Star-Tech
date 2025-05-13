import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  justify-content: flex-start; // Alterado para alinhar à esquerda
  margin: 20px 0 10px 20px; // Margens reduzidas e alinhadas com os cards
  gap: 8px; // Espaço entre botões reduzido
`;

export const TabButton = styled.button<{ active?: boolean }>`
  width: 120px; // Largura reduzida
  height: 36px; // Altura reduzida
  padding: 8px 0;
  border-radius: 8px; // Bordas arredondadas uniformes
  border: none;
  font-size: 14px; // Fonte menor
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#D8A214' : '#09152B')};
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  transition: all 0.2s ease;
`;