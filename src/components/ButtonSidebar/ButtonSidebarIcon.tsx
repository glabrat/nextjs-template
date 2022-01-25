import {
  Box,
  BoxProps,
  ChakraComponent,
  useStyleConfig,
} from '@chakra-ui/react'

const ButtonSidebarIcon: ChakraComponent<'div', BoxProps> = props => {
  const { variant, children, ...rest } = props
  const styles = useStyleConfig('ButtonSidebarIcon', { variant })

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}

export default ButtonSidebarIcon
