import styled from "styled-components";

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-radius: 0.75rem;
  padding: 1.5rem;
`;

export const NewsContent = styled.div`
  color: white;
  font-size: 0.85rem;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 0.5rem;
  height: 3rem;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
  }
  h5 {
    font-size: ${(props) => props.theme.fontSize.medium};
  }

  span {
    font-size: 0.6rem;
    font-weight: 600;
  }
`;
