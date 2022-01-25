import React, { useState } from 'react'

export const AuthContext = React.createContext<{
  islogin: boolean
  handleLogin: () => void
  handleLogout: () => void
}>({
  islogin: false,
  handleLogin: () => {
    console.log('login')
  },
  handleLogout: () => {
    console.log('logout')
  },
})

export const AuthProvider: React.FC = ({ children }) => {
  const [islogin, setIslogin] = useState(true)

  const handleLogout = () => {
    setIslogin(false)
  }

  const handleLogin = () => {
    setIslogin(true)
  }

  const value = {
    islogin,
    handleLogin,
    handleLogout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
