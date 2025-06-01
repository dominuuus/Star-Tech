import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 90vw;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 100rem;
  }
`;
