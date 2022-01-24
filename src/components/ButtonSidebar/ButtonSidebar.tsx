import { IconType } from 'react-icons'
import {
  Box,
  BoxProps,
  ChakraComponent,
  Icon,
  Text,
  useStyleConfig,
} from '@chakra-ui/react'

import ButtonSidebarIcon from './ButtonSidebarIcon'

interface IButtonSidebar {
  icon: IconType
  text: string
}

const ButtonSidebar: ChakraComponent<
  'div',
  BoxProps & IButtonSidebar
> = props => {
  const { variant, children, text, icon, ...rest } = props
  const styles = useStyleConfig('ButtonSidebar', { variant })

  return (
    <Box __css={styles} {...rest}>
      <ButtonSidebarIcon variant={variant === 'active' ? 'active' : ''} ml={1}>
        <Icon
          w={3.5}
          h={3.5}
          color={variant === 'active' ? 'white' : '#40C4FF'}
          as={icon}
        />
      </ButtonSidebarIcon>

      <Text ml={3} variant={variant === 'active' ? 'sidebarActive' : 'sidebar'}>
        {text}
      </Text>
    </Box>
  )
}

export default ButtonSidebar
