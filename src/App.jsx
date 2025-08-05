import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BookClassroom from './pages/BookClassroom'
import ViewBookings from './pages/ViewBookings'
import ManageClassrooms from './pages/ManageClassrooms'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/book" element={<BookClassroom />} />
      <Route path="/bookings" element={<ViewBookings />} />
      <Route path="/manage" element={<ManageClassrooms />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
     
    </Routes>
  )
}

export default App
