import { Flex, FlexProps } from '@chakra-ui/react'

const Header: React.FC<FlexProps & { islogin: boolean }> = props => {
  const { islogin, children, ...rest } = props

  return (
    <Flex
      {...rest}
      bg={islogin ? 'white' : 'grey'}
      boxShadow={islogin ? 'rgb(0 0 0 / 16%) 0px 3px 6px' : ''}
      minH={['15vh']}
      width={'100%'}
    >
      {children}
    </Flex>
  )
}

export default Header
