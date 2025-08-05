import '../styles/Home.css'
import Dashboard from '../components/Dashboard'

export default function ManageClassrooms() {
  return (
    <div  className="container" style={{ padding: '20px' }}>
      <h1 className="title">Classroom Booking App</h1>

        <Dashboard />
        
      <h2 className="title">Manage Classrooms</h2>
      <p className="description">This page is for admins to manage classroom availability and schedules.</p>
    </div>
  )
}
