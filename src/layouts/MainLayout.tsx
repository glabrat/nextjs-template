import { AnimateSharedLayout } from 'framer-motion'
import { useSession } from 'next-auth/react'

import DashboardLayout from './DashboardLayout'
import LoginLayout from './LoginLayout'

export const MainLayout: React.FC = ({ children }) => {
  const { data: session, status } = useSession()

  return (
    <AnimateSharedLayout>
      {session && status === 'authenticated' ? (
        <DashboardLayout>{children}</DashboardLayout>
      ) : (
        <LoginLayout>{children}</LoginLayout>
      )}
    </AnimateSharedLayout>
  )
}
