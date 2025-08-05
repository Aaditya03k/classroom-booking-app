import '../styles/Profile.css'
import '../styles/Home.css'

import Dashboard from '../components/Dashboard'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const user = {
    fullName: 'Aaditya S',
    username: 'aaditya',
    email: 'aaditya@example.com',
    role: 'Student',
    department: 'Computer Science',
    year: '3rd Year',
    mobile: '+91 98765 43210',
    dob: '2003-08-12',
    address: '123, Anna Nagar, Chennai, Tamil Nadu',
    registeredSince: 'July 2022'
  }
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate('/login')
  }

  return (
<div className="container" style={{ padding: '20px' }}>
    
    <h1 className="title" >Classroom Booking App</h1>
        
                <Dashboard />


    <div className="profile-container">
        
      <h2>👤 Profile</h2>
      <div className="profile-card">
        <p><strong>Full Name:</strong> {user.fullName}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Department:</strong> {user.department}</p>
        <p><strong>Year:</strong> {user.year}</p>
        <p><strong>Mobile:</strong> {user.mobile}</p>
        <p><strong>Date of Birth:</strong> {user.dob}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Registered Since:</strong> {user.registeredSince}</p>
        <center><button onClick={handleClick}>logout</button></center>
        </div>
    </div>
</div>
  )
}
