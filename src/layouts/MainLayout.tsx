import { AnimateSharedLayout } from 'framer-motion'

import DashboardLayout from './DashboardLayout'
import LoginLayout from './LoginLayout'

export const MainLayout: React.FC = ({ children }) => {
  const isLogin = false

  return (
    <AnimateSharedLayout>
      {isLogin ? (
        <DashboardLayout isLogin={isLogin}>{children}</DashboardLayout>
      ) : (
        <LoginLayout isLogin={isLogin}>{children}</LoginLayout>
      )}
    </AnimateSharedLayout>
  )
}
