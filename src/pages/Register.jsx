import { Link } from 'react-router-dom'
import '../styles/Auth.css'





export default function Register() {
  return (
<div className="auth-container">

    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>Register Page</h2>
      <p>This is a placeholder page for new user registration.</p>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
    </div>
  )
}
