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
  const [position, setPosition] = useState(1)

  const isSelected = (selected: number) => {
    return position === selected
  }

  return (
    <Flex
      direction={'column'}
      align={'flex-start'}
      justify={'space-between'}
      w={isOpen ? 56 : 16}
      bg="#FFFFFF"
      p={2}
      transition="all 0.3s ease"
    >
      <VStack
        overflow={'hidden'}
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
        <ButtonSidebar
          isOpen={isOpen}
          title="Locales"
          icon={BsBuilding}
          handleClick={() => setPosition(1)}
          isActive={isSelected(1)}
        />
        <ButtonSidebar
          isOpen={isOpen}
          title="Tiempo"
          icon={FaMinusSquare}
          handleClick={() => setPosition(2)}
          isActive={isSelected(2)}
        />
        <ButtonSidebar
          isOpen={isOpen}
          title="Visualización"
          icon={FiBriefcase}
          handleClick={() => setPosition(3)}
          isActive={isSelected(3)}
        />
        <ButtonSidebar
          isOpen={isOpen}
          title="Cobertura"
          icon={FiRadio}
          handleClick={() => setPosition(4)}
          isActive={isSelected(4)}
        />
      </VStack>

      <VStack
        w="full"
        overflow={'hidden'}
        align={'flex-start'}
        spacing={4}
        mb={2}
        direction="column"
      >
        <Divider size="2"></Divider>
        <ButtonSidebar
          isOpen={isOpen}
          title="Configuración"
          icon={MdOutlineSettings}
          handleClick={() => setPosition(5)}
          isActive={isSelected(5)}
        />
        <ButtonSidebar
          isOpen={isOpen}
          title="Ayuda"
          icon={MdOutlineHelpOutline}
          handleClick={() => setPosition(6)}
          isActive={isSelected(6)}
        />
      </VStack>
    </Flex>
  )
}
