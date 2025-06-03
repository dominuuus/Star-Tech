import styled from "styled-components";

export const NotFoundContainer = styled.div`
  justify-content: center;
  text-align: center;
  margin-top: 5rem;
  font-size: ${(props) => props.theme.fontSize.extraLarge};
  height: 100vh;
  width: 90vw;

  img {
    height: 15rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 80vw;
    font-size: ${(props) => props.theme.fontSize.large};

    img {
      height: 10rem;
    }
  }
`;
