import { NavLink } from 'react-router-dom'
import * as Icon from '@phosphor-icons/react'
import isotype from '../../assets/isotype.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <NavLink to='/' title='Ignite Pomodoro'>
        <img
          className='header__logo'
          src={isotype}
          alt='Logo/Ícone - Ignite Pomodoro'
        />
      </NavLink>

      <nav className='header__nav-list'>
        <NavLink to='/' title='Pomodoro'>
          <Icon.Timer />
        </NavLink>

        <NavLink to='/history' title='Histórico'>
          <Icon.Scroll />
        </NavLink>
      </nav>
    </S.Header>
  )
}
