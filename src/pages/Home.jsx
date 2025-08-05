import Dashboard from '../components/Dashboard'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="container" style={{ padding: '20px' }}>
      
      <h1 className="title">Classroom Booking App</h1>
            <Dashboard />
      <h2 className="title">Home</h2>      

      <p className="description">
        Welcome to the Classroom Booking App. Here you can easily book classrooms for lectures,
        events, and other purposes. Use the navigation bar below to move around the application.
      </p>
    </div>
  )
}
