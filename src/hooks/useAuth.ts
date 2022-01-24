import { useContext, useState } from 'react'
import { AuthContext } from 'context/AuthContext'
import { useRouter } from 'next/router'
import AuthService, { LoginBody, LoginResponse } from 'services/auth'

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<LoginResponse>()
  const [error, setError] = useState<boolean>(false)
  const result = { data, loading, error }
  const { handleLogin: makeLogin } = useContext(AuthContext)
  const router = useRouter()

  const handleLogin = (body: LoginBody) => {
    setLoading(true)
    AuthService.login(body)
      .then(response => {
        if (!response.ok) throw Error(response.status.toString())

        return response.json()
      })
      .then((data: LoginResponse) => {
        setData(data)
        makeLogin(data.accessToken)
        router.push('/dashboard')
      })
      .catch(() => {
        console.log('ocurrio un error!')
        setError(true)
      })
      .finally(() => setLoading(false))
  }

  return { handleLogin, result }
}

export const useLogout = () => {
  const router = useRouter()
  const { handleLogout: makeLogout } = useContext(AuthContext)

  const handleLogout = () => {
    makeLogout()
    router.push('/login')
  }

  return { handleLogout }
}
