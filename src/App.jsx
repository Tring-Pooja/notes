import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Notes from './pages/notes.jsx'

function App() {
  return (
    <BrowserRouter>
      <nav style={{ margin: 10 }}>
        <Link to="/login">Login</Link> |{' '}
        <Link to="/register">Register</Link> |{' '}
        <Link to="/notes">Notes</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
