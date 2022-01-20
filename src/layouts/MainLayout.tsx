import { useContext } from 'react'
import { AuthContext } from 'context/AuthContext'
import { AnimateSharedLayout } from 'framer-motion'

import DashboardLayout from './DashboardLayout'
import LoginLayout from './LoginLayout'

export const MainLayout: React.FC = ({ children }) => {
  const { islogin } = useContext(AuthContext)

  return (
    <AnimateSharedLayout>
      {islogin ? (
        <DashboardLayout islogin={islogin}>{children}</DashboardLayout>
      ) : (
        <LoginLayout islogin={islogin}>{children}</LoginLayout>
      )}
    </AnimateSharedLayout>
  )
}
