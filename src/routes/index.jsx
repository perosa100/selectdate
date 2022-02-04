import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RegisterUserScale } from '../pages'

const RoutesPath = () => (
  <BrowserRouter>
    <Routes>
      <Route path="registerserscale" element={<RegisterUserScale />} />
    </Routes>
    Angola
  </BrowserRouter>
)

export { RoutesPath }
