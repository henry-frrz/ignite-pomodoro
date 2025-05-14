import { Header } from '../../components'
import { Outlet } from 'react-router-dom'

import * as S from './styles'

export const DefaultLayout = () => {
  return (
    <S.DefaultLayout>
      <Header />
      <Outlet />
    </S.DefaultLayout>
  )
}
