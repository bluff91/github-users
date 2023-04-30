import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './pages/PrivateRoute'
import AuthWrapper from './pages/AuthWrapper'

const App = () => {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  )
}
export default App
