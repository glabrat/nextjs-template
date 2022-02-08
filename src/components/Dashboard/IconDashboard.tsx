import { IconType } from 'react-icons/lib'
import { Icon } from '@chakra-ui/react'

export type IconDashboardProps = {
  icon: IconType
  handleClick?: () => void
}

export const IconDashboard: React.FC<IconDashboardProps> = ({
  icon,
  handleClick,
}) => {
  return (
    <Icon
      cursor={'pointer'}
      onClick={handleClick}
      as={icon}
      w={5}
      h={5}
      color="#166DC2"
    />
  )
}
