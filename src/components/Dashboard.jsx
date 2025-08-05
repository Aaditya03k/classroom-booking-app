import { Link, useNavigate } from 'react-router-dom'
import '../styles/Home.css' // Same CSS file used for styling
import { useState } from 'react'

export default function Dashboard() {
const [showConfirm, setShowConfirm] = useState(false)
const navigate = useNavigate()

const handleLogoutConfirm = () => {
    // You can clear auth state/localStorage here too
    navigate('/login')
}
return (
    <nav className="navbar">
        <Link to="/home">Home</Link>
      <Link to="/book">Book Classroom</Link>
      <Link to="/bookings">View Bookings</Link>
      <Link to="/manage">Manage Classrooms</Link>
      <Link to="/profile">Profile</Link>
       <Link><span
        onClick={() => setShowConfirm(!showConfirm)}>Logout</span></Link>
       
       {showConfirm && (
        <span
          onClick={handleLogoutConfirm}
          style={{
            backgroundColor: 'white',
            color: '#1e90ff',
            padding: '0.4rem 0.8rem',
            borderRadius: '5px',
            marginLeft: '10px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          ✅ Confirm Logout
        </span>
      
        )}
    </nav>
    )
}
