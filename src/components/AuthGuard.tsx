import { useContext, useEffect } from 'react'
import { AuthContext } from 'context/AuthContext'
import { useRouter } from 'next/router'

export function AuthGuard({ children }: { children: JSX.Element }) {
  const { islogin } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!islogin && router.route !== '/login') router.push('/login')
  }, [islogin, router])

  if (islogin || router.route === '/login') return <>{children}</>

  return null
}
