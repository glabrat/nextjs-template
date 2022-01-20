import { useContext, useState } from 'react'
import { AuthContext } from 'context/AuthContext'
import { useRouter } from 'next/router'
import { LoginBody } from 'services/auth'

export const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<{ accessToken: string }>()
  const [error, setError] = useState<boolean>()
  const result = { data, loading, error }
  const { handleLogin: makeLogin } = useContext(AuthContext)
  const router = useRouter()

  const fakeApi = (body: LoginBody): Promise<{ accessToken: string }> => {
    const { email } = body

    return new Promise((resolve, _) => {
      console.log(_)
      setTimeout(() => {
        const fakeData = {
          email,
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA5YzU0ZWUwLTM1ZDYtNDdlNS05ZmRhLTIwMDRlOWZmYzY2YyIsImVtYWlsIjoiU2ViYXN0aWFuLmJvYmFkaWxsYUByb2trZXRsYWJzLmNvbSIsImZpcnN0X25hbWUiOiJTZWJhc3RpYW4iLCJsYXN0X25hbWUiOiJCb2JhZGlsbGEiLCJzZWxsZXJfaWQiOiIiLCJzZWxsZXJfbmFtZSI6bnVsbCwicm9sZSI6InNlbGxlciIsImZpbmFuY2lhbF9hY2Nlc3MiOmZhbHNlLCJmYWNpbGl0eV9pZCI6IiIsInNlbGxlcl90eXBlIjpudWxsLCJpc19jb2xsZWN0b3IiOm51bGwsImFwaV9rZXkiOm51bGwsInBlcm1pc3Npb25zIjpbeyJjIjoiQXBpS2V5Q29udHJvbGxlciIsImEiOiIqIn0seyJjIjoiQXV0aENvbnRyb2xsZXIiLCJhIjoiKiJ9LHsiYyI6IkNlbnRyeUNvbnRyb2xsZXIiLCJhIjoiKiJ9LHsiYyI6IkV4cG9ydENvbnRyb2xsZXIiLCJhIjoiKiJ9LHsiYyI6IkZhY2lsaXRpZXNDb250cm9sbGVyIiwiYSI6IioifSx7ImMiOiJJbXBvcnRDb250cm9sbGVyIiwiYSI6IioifSx7ImMiOiJMb2dpbkNvb2tpZUNvbnRyb2xsZXIiLCJhIjoiKiJ9LHsiYyI6Ik9yZGVySXRlbUNvbnRyb2xsZXIiLCJhIjoiKiJ9LHsiYyI6Ik9yZGVyc0NvbnRyb2xsZXIiLCJhIjoiKiJ9LHsiYyI6IlBlcm1pc3Npb25zQ29udHJvbGxlciIsImEiOiIqIn0seyJjIjoiUHJvZHVjdHNDb250cm9sbGVyIiwiYSI6IioifSx7ImMiOiJSZXR1cm5zQ29udHJvbGxlciIsImEiOiIqIn0seyJjIjoiUm9sZXNDb250cm9sbGVyIiwiYSI6IioifSx7ImMiOiJTZWxsZXJzQ29udHJvbGxlciIsImEiOiIqIn0seyJjIjoiU2hpcG1lbnRzQ29udHJvbGxlciIsImEiOiIqIn0seyJjIjoiU3RvY2tDb250cm9sbGVyIiwiYSI6IioifSx7ImMiOiJTdG9ja0ltcG9ydENvbnRyb2xsZXIiLCJhIjoiKiJ9LHsiYyI6IkFrZW5lb0NvbnRyb2xsZXIiLCJhIjoiKiJ9LHsiYyI6IlJlcG9ydHNDb250cm9sbGVyIiwiYSI6IioifSx7ImMiOiJPcmRlcnNWMUNvbnRyb2xsZXIiLCJhIjoiKiJ9XSwiaWF0IjoxNjQyNjgzODcxLCJleHAiOjE2NDI2OTgyNzEsImlzcyI6IkVpZmZlbC1TdGcifQ.U7mz4RMlUdx0BAszOhGtAqD4rYKXsI9nxSW7Twm0aJg',
        }

        return resolve(fakeData)
      }, 500)
    })
  }

  const handleLogin = async (body: LoginBody) => {
    try {
      setLoading(true)

      const response = await fakeApi(body)

      setData(response)
      sessionStorage.setItem('token', response.accessToken)
      setLoading(false)
      makeLogin()
      router.push('/dashboard')
    } catch (error: unknown) {
      setError(true)
    }
  }

  return { handleLogin, result }
}

export const useLogout = () => {
  const router = useRouter()
  const { handleLogout: makeLogout } = useContext(AuthContext)

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    makeLogout()
    router.push('/login')
  }

  return { handleLogout }
}
