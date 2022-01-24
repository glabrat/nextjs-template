import { Flex, FlexProps } from '@chakra-ui/react'

const Header: React.FC<FlexProps & { islogin: boolean }> = props => {
  const { islogin, children, ...rest } = props

  return (
    <Flex
      {...rest}
      bg={islogin ? 'gray.50' : 'grey'}
      minH={['15vh']}
      width={'100%'}
    >
      {children}
    </Flex>
  )
}

export default Header
