import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import History from './pages/history'

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/history' element={<History />} />
    </Routes>
  )
}
