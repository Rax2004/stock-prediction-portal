import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'


const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegistration = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    const userData = {
      username,
      email,
      password
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/register/',
        userData
      )

      console.log('response.data ==>', response.data)
      console.log('registration is successful')

      setErrors({})
      setSuccess(true)

    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data)
        console.error('Registration error', error.response.data)
      } else {
        console.error('Registration error', error)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6 bg-dark p-5 rounded'>
          <h3 className='text-light text-center'>Create an Account</h3>

          <form onSubmit={handleRegistration}>
            <div className='mb-3'>
              <input
                type='text'
                className='form-control mb-2'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && (
                <div className='text-danger'>
                  {errors.username[0]}
                </div>
              )}
            </div>

            <div className='mb-3'>
              <input
                type='email'
                className='form-control mb-3'
                placeholder='Email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className='text-danger'>
                  {errors.email[0]}
                </div>
              )}
            </div>

            <div className='mb-3'>
              <input
                type='password'
                className='form-control mb-3'
                placeholder='Set password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <div className='text-danger'>
                  {errors.password[0]}
                </div>
              )}
            </div>

            {success && (
              <div className='alert alert-success'>
                Registration Successful
              </div>
            )}

            <button
            type='submit'
            className='btn btn-info d-block mx-auto'
            disabled={loading}>
              {loading ? (
                <>
                <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                Please Wait...
              </>
            ) : (
            'Register'
            )}
          </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Register