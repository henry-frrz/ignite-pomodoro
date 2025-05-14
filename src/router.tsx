import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import Home from './pages/home'
import History from './pages/history'

export const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path='/history' element={<History />} />
      </Route>
    </Routes>
  )
}
