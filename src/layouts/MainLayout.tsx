import { useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion'

import DashboardLayout from './DashboardLayout'
import LoginLayout from './LoginLayout'

export const MainLayout: React.FC = ({ children }) => {
  const [islogin, setIslogin] = useState(true)

  const handleLogout = () => {
    setIslogin(false)
  }

  return (
    <AnimateSharedLayout>
      {islogin ? (
        <DashboardLayout handleLogout={handleLogout} islogin={islogin}>
          {children}
        </DashboardLayout>
      ) : (
        <LoginLayout islogin={islogin}>{children}</LoginLayout>
      )}
    </AnimateSharedLayout>
  )
}
