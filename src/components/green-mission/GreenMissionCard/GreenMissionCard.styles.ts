import { styled } from "styled-components";

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.gray.light};
  border-radius: 7px;
  padding: 10px 30px;
  font-weight: 600;
  transition: transform 0.2s ease-in-out;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;
