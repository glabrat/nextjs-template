import { AnimateSharedLayout } from 'framer-motion'

import DashboardLayout from './DashboardLayout'
import LoginLayout from './LoginLayout'

export const MainLayout: React.FC = ({ children }) => {
  const islogin = true

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
