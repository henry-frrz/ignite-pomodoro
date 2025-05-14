import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header__logo {
    height: ${pxToRem(40)};
  }

  .header__nav-list {
    display: flex;
    gap: ${pxToRem(5)};

    a {
      padding: ${pxToRem(12.5)};
      color: ${({ theme }) => theme.colors.neutral[200]};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: all 0.1s;

      &:hover {
        color: ${({ theme }) => theme.colors.brand[100]};
        border-bottom: 3px solid ${({ theme }) => theme.colors.brand[100]};
      }

      &.active {
        color: ${({ theme }) => theme.colors.brand[100]};
      }

      svg {
        width: ${pxToRem(28)};
        height: ${pxToRem(28)};
      }
    }
  }
`
