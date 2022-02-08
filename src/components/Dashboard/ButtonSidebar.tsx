import { IconType } from 'react-icons/lib'
import { Flex, Text } from '@chakra-ui/react'

import { TooltipDashboard } from './TooltipDashboard'

type Props = {
  isOpen: boolean
  title?: string
  icon: IconType
  isActive?: boolean
  handleClick?: () => void
}

export const ButtonSidebar: React.FC<Props> = ({
  isOpen,
  title,
  icon,
  isActive,
  handleClick,
}) => {
  return (
    <Flex
      onClick={handleClick}
      cursor={'pointer'}
      borderRadius="md"
      p={2}
      w={isOpen ? 'full' : 10}
      direction={'row'}
      bg={isActive ? '#E1F0FF' : ''}
    >
      <TooltipDashboard
        isDisabled={isOpen}
        placement="right"
        label={title}
        icon={icon}
      />
      <Text visibility={isOpen ? 'visible' : 'hidden'} ml={2} fontSize={'sm'}>
        {title}
      </Text>
    </Flex>
  )
}
