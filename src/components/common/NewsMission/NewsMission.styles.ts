import styled from "styled-components";

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 20rem;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 0.75rem;
  padding: 1.5rem;
  span {
    color: ${(props) => props.theme.colors.white};;
    font-size: 0.85rem;
  }
`;
