import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Authprovider'

const Header = () => {
  const { isLoggedIn, setIsLoggedIN } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    setIsLoggedIN(false)
    navigate('/login')
  }

  return (
    <nav className="navbar container d-flex justify-content-between align-items-center py-3">
      
      <Link className="navbar-brand text-light fw-bold" to="/">
        Stock Prediction Portal
      </Link>

      <div className="d-flex gap-2">
        {isLoggedIn ? (
          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="btn btn-info">
              Login
            </Link>

            <Link to="/register" className="btn btn-outline-light">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Header