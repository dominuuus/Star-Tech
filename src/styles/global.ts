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
  }
`;
