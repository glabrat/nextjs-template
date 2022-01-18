import { Flex } from '@chakra-ui/react'

const Header: React.FC<{ isLogin: boolean }> = ({ children, isLogin }) => {
  return (
    <Flex
      bg={isLogin ? 'white' : 'grey'}
      boxShadow={isLogin ? 'rgb(0 0 0 / 16%) 0px 3px 6px' : ''}
      minH={['15vh', '18vh']}
      width={'100%'}
    >
      {children}
    </Flex>
  )
}

export default Header
