import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/defaultTheme";
import { QueryClientWrapper } from "./lib/queryClientProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <QueryClientWrapper>
        <App />
      </QueryClientWrapper>
    </ThemeProvider>
  </StrictMode> 
);
