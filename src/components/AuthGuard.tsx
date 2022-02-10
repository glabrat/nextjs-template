import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export function AuthGuard({ children }: { children: JSX.Element }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session && router.route !== '/login' && status !== 'loading')
      router.push('/login')

    if (session && router.route === '/login' && status === 'authenticated')
      router.push('/dashboard')
  }, [session, status, router])

  if ((session && status === 'authenticated') || router.route === '/login')
    return <>{children}</>

  return null
}
