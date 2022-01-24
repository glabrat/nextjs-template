import React, { useState } from 'react'

export type User = {
  token?: string
}

export const AuthContext = React.createContext<{
  user?: User | undefined
  handleLogin: (token: string) => void
  handleLogout: () => void
  getUser: () => User | undefined
}>({
  handleLogin: () => {
    console.log('login')
  },
  handleLogout: () => {
    console.log('logout')
  },
  getUser: () => undefined,
})

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | undefined>()

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    setUser(undefined)
  }

  const handleLogin = (token: string) => {
    if (token) sessionStorage.setItem('token', token)
    setUser({ token })
  }

  const getUser = () => {
    if (!user && typeof window !== 'undefined') {
      const token = sessionStorage.getItem('token')

      if (token) setUser({ token })
    }

    return user
  }

  const value = {
    user,
    handleLogin,
    handleLogout,
    getUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
