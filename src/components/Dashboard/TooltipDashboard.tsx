import { ChakraComponent, Flex, Tooltip, TooltipProps } from '@chakra-ui/react'

import { IconDashboard, IconDashboardProps } from './IconDashboard'

export const TooltipDashboard: ChakraComponent<
  'div',
  Omit<TooltipProps, 'children'> & IconDashboardProps
> = ({ icon, handleClick, label, ...rest }) => {
  return (
    <Tooltip {...rest} hasArrow label={label}>
      <Flex align="center" justify={'center'}>
        <IconDashboard icon={icon} handleClick={handleClick} />
      </Flex>
    </Tooltip>
  )
}
