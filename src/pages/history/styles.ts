/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const History = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 80%;
  padding: ${pxToRem(70)} ${pxToRem(90)};
  padding-top: ${pxToRem(30)};

  h1 {
    color: ${({ theme }) => theme.colors.neutral[200]};
    font-size: 1.5rem;
    font-weight: 700;
  }
`

export const List = styled.div`
  overflow: auto;
  margin-top: ${pxToRem(32)};

  table {
    min-width: ${pxToRem(500)};
    width: 100%;
    border-radius: ${pxToRem(8)};
    overflow: hidden;
    border-collapse: collapse;

    * {
      font-size: 0.875rem;
    }

    th,
    td {
      padding: ${pxToRem(16)} ${pxToRem(8)};

      line-height: 160%;

      &:first-child {
        padding-left: ${pxToRem(24)};
      }

      &:last-child {
        padding-right: ${pxToRem(24)};
      }
    }

    th {
      color: ${({ theme }) => theme.colors.neutral[200]};
      text-align: left;
      font-weight: 700;
      background-color: ${({ theme }) => theme.colors.neutral[600]};
    }

    td {
      background-color: ${({ theme }) => theme.colors.neutral[650]};
      border-top: 4px solid ${({ theme }) => theme.colors.neutral[700]};

      &:first-child {
        width: 50%;
      }
    }
  }
`

const STATUS_FEEDBACKS = {
  concluded: 'concluded',
  inProgress: `inProgress`,
  interrupt: `interrupt`,
} as const

interface StatusProps {
  feedback: keyof typeof STATUS_FEEDBACKS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};

  &::before {
    content: '';
    width: ${pxToRem(8)};
    height: ${pxToRem(8)};
    border-radius: 100%;
    background-color: ${({ theme, feedback }) =>
      theme.colors.feedback[STATUS_FEEDBACKS[feedback]][100]};
    transform: translateY(-15%);
  }
`
