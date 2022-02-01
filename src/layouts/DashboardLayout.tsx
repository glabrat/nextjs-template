import { useContext } from 'react'
import { BiUser } from 'react-icons/bi'
import { MdOutlineLogout } from 'react-icons/md'
import { VscBell } from 'react-icons/vsc'
import { Flex, Image } from '@chakra-ui/react'
import { AuthContext } from 'context/AuthContext'

import { TooltipDashboard } from 'components/Dashboard/TooltipDashboard'
import { Sidebar } from 'components/Sidebar'

const DashboardLayout: React.FC = ({ children }) => {
  const { handleLogout } = useContext(AuthContext)

  return (
    <Flex height={'100vh'} width={'100%'} bg="#F7FAFC">
      <Sidebar />
      <Flex w="full" direction={'column'} overflow={'auto'}>
        <Flex
          minH={'4.5rem'}
          bg="#FFFFFF"
          justify="space-between"
          align={'center'}
        >
          <Image ml={10} src="/rokketlabs.svg" height={51} width={143} />
          <Flex mr={24} w={28} justify={'space-between'} align="center">
            <TooltipDashboard label="Mi Perfil" icon={BiUser} />
            <TooltipDashboard label="Notificaciones" icon={VscBell} />
            <TooltipDashboard
              label="Salir"
              icon={MdOutlineLogout}
              handleClick={handleLogout}
            />
          </Flex>
        </Flex>
        <Flex direction={'column'}>{children}</Flex>
      </Flex>
    </Flex>
  )
}

export default DashboardLayout
