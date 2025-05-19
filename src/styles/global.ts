import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

    a {
        color: ${(props) => props.theme.colors.white};
    }

    html, body, #root {
    width: 100%;
    height: 100%;

    color: ${(props) => props.theme.colors.white};
  }

  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;
