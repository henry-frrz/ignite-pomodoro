import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const Home = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(55)};
  margin-top: ${pxToRem(50)};
  margin-bottom: ${pxToRem(150)};
`

export const NewCycleForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(8)};
  width: 100%;
  color: ${({ theme }) => theme.colors.neutral[200]};

  * {
    font-size: 10;
    font-weight: 700;
  }
`

export const BaseInput = styled.input`
  height: ${pxToRem(40)};
  padding: 0 ${pxToRem(8)};
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.neutral[400]};
  transition: all 0.1s;
  color: ${({ theme }) => theme.colors.neutral[200]};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.brand[100]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[400]};
  }
`

export const TaskInput = styled(BaseInput)`
  min-width: ${pxToRem(240)};
`

export const MinutesAmountInput = styled(BaseInput)`
  width: ${pxToRem(75)};
`

export const Countdown = styled.div`
  display: flex;
  gap: ${pxToRem(16)};
  color: ${({ theme }) => theme.colors.neutral[200]};

  * {
    font-family: 'Roboto Mono', monospace;
    font-size: ${pxToRem(160)};
    font-weight: 700;
  }

  span {
    padding: 0 ${pxToRem(16)};
    background-color: ${({ theme }) => theme.colors.neutral[600]};
    border-radius: ${pxToRem(8)};
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.brand[100]};
  overflow: hidden;
`

export const BaseCountdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(8)};
  width: 100%;
  padding: ${pxToRem(16)};
  border-radius: ${pxToRem(8)};
  color: ${({ theme }) => theme.colors.neutral[200]};
  font-weight: 700;

  svg {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${({ theme }) => theme.colors.brand[100]};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.brand[200]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.brand[200]};
    opacity: 0.5;
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${({ theme }) => theme.colors.feedback.interrupt[100]};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.feedback.interrupt[200]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.feedback.interrupt[200]};
    opacity: 0.5;
  }
`
