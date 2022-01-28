import { BiUser } from 'react-icons/bi'
import { BsBuilding } from 'react-icons/bs'
import { FaMinusSquare } from 'react-icons/fa'
import { FiBriefcase, FiRadio } from 'react-icons/fi'
import {
  MdMenu,
  MdOutlineHelpOutline,
  MdOutlineLogout,
  MdOutlineSettings,
} from 'react-icons/md'
import { VscBell } from 'react-icons/vsc'
import { Divider, Flex, Image, VStack } from '@chakra-ui/react'

import { TooltipDashboard } from 'components/Dashboard/TooltipDashboard'

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Flex height={'100vh'} width={'100%'} bg="#F7FAFC">
      <Flex
        direction={'column'}
        align={'center'}
        justify={'space-between'}
        minW={16}
        bg="#FFFFFF"
        p={2}
      >
        <VStack mt={2} spacing={4} direction={'column'}>
          <TooltipDashboard placement="right" label="Menú" icon={MdMenu} />
          <TooltipDashboard
            placement="right"
            label="Locales"
            icon={BsBuilding}
          />
          <TooltipDashboard
            placement="right"
            label="Tiempo"
            icon={FaMinusSquare}
          />
          <TooltipDashboard
            placement="right"
            label="Visualización"
            icon={FiBriefcase}
          />

          <TooltipDashboard
            placement="right"
            label="Cobertura"
            icon={FiRadio}
          />
        </VStack>

        <VStack spacing={4} mb={2} direction="column">
          <Divider size="2"></Divider>
          <TooltipDashboard
            placement="right"
            label="Configuración"
            icon={MdOutlineSettings}
          />
          <TooltipDashboard
            placement="right"
            label="Ayuda"
            icon={MdOutlineHelpOutline}
          />
        </VStack>
      </Flex>
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
            <TooltipDashboard label="Salir" icon={MdOutlineLogout} />
          </Flex>
        </Flex>
        <Flex direction={'column'}>{children}</Flex>
      </Flex>
    </Flex>
  )
}

export default DashboardLayout
