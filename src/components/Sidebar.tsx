import { useState } from 'react'
import { BsBuilding } from 'react-icons/bs'
import { FaMinusSquare } from 'react-icons/fa'
import { FiBriefcase, FiRadio } from 'react-icons/fi'
import {
  MdClose,
  MdMenu,
  MdOutlineHelpOutline,
  MdOutlineSettings,
} from 'react-icons/md'
import { Divider, Flex, VStack } from '@chakra-ui/react'

import { ButtonSidebar } from './Dashboard/ButtonSidebar'

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex
      direction={'column'}
      align={'flex-start'}
      justify={'space-between'}
      minW={isOpen ? 56 : 16}
      bg="#FFFFFF"
      p={2}
      transition="all 0.3s ease"
    >
      <VStack
        w="full"
        align={'flex-start'}
        mt={2}
        spacing={4}
        direction={'column'}
      >
        <ButtonSidebar
          isOpen={isOpen}
          icon={isOpen ? MdClose : MdMenu}
          handleClick={() => setIsOpen(!isOpen)}
        />
        <ButtonSidebar isOpen={isOpen} title="Locales" icon={BsBuilding} />
        <ButtonSidebar isOpen={isOpen} title="Tiempo" icon={FaMinusSquare} />
        <ButtonSidebar
          isOpen={isOpen}
          title="Visualización"
          icon={FiBriefcase}
        />
        <ButtonSidebar isOpen={isOpen} title="Cobertura" icon={FiRadio} />
      </VStack>

      <VStack align={'flex-start'} spacing={4} mb={2} direction="column">
        <Divider size="2"></Divider>
        <ButtonSidebar
          isOpen={isOpen}
          title="Configuración"
          icon={MdOutlineSettings}
        />
        <ButtonSidebar
          isOpen={isOpen}
          title="Ayuda"
          icon={MdOutlineHelpOutline}
        />
      </VStack>
    </Flex>
  )
}
