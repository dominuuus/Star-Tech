import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/defaultTheme/defaultTheme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
