import * as Icon from '@phosphor-icons/react'

import * as S from './styles'

function Home() {
  return (
    <S.Home>
      <S.NewCycleForm>
        <label htmlFor='task'>Vou trabalhar em</label>
        <S.TaskInput
          id='task'
          type='text'
          placeholder='Dê um nome para o seu projeto'
        />

        <label htmlFor='minutesAmount'>durante</label>
        <S.MinutesAmountInput
          id='minutesAmount'
          type='number'
          placeholder='00'
          step={5}
          min={5}
        />
        <span>minutos</span>
      </S.NewCycleForm>

      <S.Countdown>
        <span>0</span>
        <span>0</span>
        <S.Separator>:</S.Separator>
        <span>0</span>
        <span>0</span>
      </S.Countdown>

      <S.StartCountdownButton type='submit'>
        <Icon.Play /> Começar
      </S.StartCountdownButton>
    </S.Home>
  )
}

export default Home
