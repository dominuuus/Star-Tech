import 'styled-components'
import { defaultTheme } from '../themes/defaultTheme/defaultTheme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export type DefaultTheme = ThemeType;
}