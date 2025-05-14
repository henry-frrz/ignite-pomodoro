import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const DefaultLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 75%;
  min-height: calc(100dvh - ${pxToRem(160)});
  margin: ${pxToRem(80)} auto;
  padding: ${pxToRem(40)};
  background-color: ${({ theme }) => theme.colors.neutral[700]};
  border-radius: ${pxToRem(8)};
`
