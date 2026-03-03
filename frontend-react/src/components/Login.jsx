import React, { useState, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../Authprovider'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { setIsLoggedIN } = useContext(AuthContext)
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/token/',
        { username, password }
      )

      localStorage.setItem('access', response.data.access)
      localStorage.setItem('refresh', response.data.refresh)

      setIsLoggedIN(true)   // 🔥 THIS IS IMPORTANT
      navigate('/')

    } catch (err) {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="container mt-5">
      <div className="col-md-4 mx-auto bg-dark p-4 rounded">
        <h4 className="text-light text-center mb-3">Login</h4>

        <form onSubmit={handleLogin}>
          <input
            className="form-control mb-3"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className="alert alert-danger">{error}</div>}

          <button className="btn btn-info w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login