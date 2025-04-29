/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components'
import { darkTheme } from '../styles/themes/dark.ts'

type ThemeType = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
