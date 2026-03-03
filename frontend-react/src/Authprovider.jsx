import { useState, createContext } from 'react'

const AuthContext = createContext()

const Authprovider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIN] = useState(
    !!localStorage.getItem('access')
  )

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIN }}>
      {children}
    </AuthContext.Provider>
  )
}

export default Authprovider
export { AuthContext }