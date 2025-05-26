import { styled } from "styled-components";

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 7px;
  padding: 20px;
  font-weight: 600;
  transition: transform 0.2s ease-in-out;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const TitleCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.large};
  justify-content: space-between;
  padding: 10px;
`

export const ProgressBar = styled.div`
  min-width: 80%;
  background-color: ${(props) => props.theme.colors.gray.lighter};
  border-radius: 20px;
  height: 10px;
`

export const ProgressBarIndicator = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.news};
  border-radius: 20px;
    height: 10px;

`