import { useContext, useEffect } from 'react'
import { AuthContext } from 'context/AuthContext'
import { useRouter } from 'next/router'

export function AuthGuard({ children }: { children: JSX.Element }) {
  const { user } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!user && router.route !== '/login') router.push('/login')
  }, [user, router])

  if (user || router.route === '/login') return <>{children}</>

  return null
}
