import { ChakraComponent, Tooltip, TooltipProps } from '@chakra-ui/react'

import { IconDashboard, IconDashboardProps } from './IconDashboard'

export const TooltipDashboard: ChakraComponent<
  'div',
  Omit<TooltipProps, 'children'> & IconDashboardProps
> = ({ icon, handleClick, label, ...rest }) => {
  return (
    <Tooltip {...rest} hasArrow label={label}>
      <div>
        <IconDashboard icon={icon} handleClick={handleClick} />
      </div>
    </Tooltip>
  )
}
