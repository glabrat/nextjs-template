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
      cursor={'pointer'}
      borderRadius="sm"
      p={2}
      w={isOpen ? 'full' : ''}
      direction={'row'}
      bg={isActive ? '#E1F0FF' : ''}
    >
      <TooltipDashboard
        placement="right"
        label={title}
        icon={icon}
        handleClick={handleClick}
      />
      {isOpen && (
        <Text ml={2} fontSize={'sm'}>
          {title}
        </Text>
      )}
    </Flex>
  )
}
