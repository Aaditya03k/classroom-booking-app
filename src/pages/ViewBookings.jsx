import '../styles/Home.css'
import Dashboard from '../components/Dashboard'

export default function ViewBookings() {
  return (
    <div  className="container" style={{ padding: '20px' }}>
      <h1 className="title">Classroom Booking App</h1>

            <Dashboard />

      <h2 className="title">Your Bookings</h2>
      <p className="description">This page will show your current and past bookings.</p>
    </div>
  )
}
