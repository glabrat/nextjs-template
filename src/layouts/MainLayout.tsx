import { useContext } from 'react'
import { AuthContext } from 'context/AuthContext'
import { AnimateSharedLayout } from 'framer-motion'

import DashboardLayout from './DashboardLayout'
import LoginLayout from './LoginLayout'

export const MainLayout: React.FC = ({ children }) => {
  const { getUser } = useContext(AuthContext)

  return (
    <AnimateSharedLayout>
      {getUser() ? (
        <DashboardLayout user={getUser()}>{children}</DashboardLayout>
      ) : (
        <LoginLayout user={getUser()}>{children}</LoginLayout>
      )}
    </AnimateSharedLayout>
  )
}
