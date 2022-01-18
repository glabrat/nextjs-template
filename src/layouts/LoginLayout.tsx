import { Flex, Image, Text } from '@chakra-ui/react'

import Header from '../components/Header'

const LoginLayout: React.FC<{ isLogin: boolean }> = ({ children, isLogin }) => {
  return (
    <Flex
      direction={'column'}
      justify={'space-between'}
      align={'center'}
      height="100vh"
      bg="#eee"
    >
      <Header isLogin={isLogin}>
        <Image ml={14} src="/rokketlabs.svg" height={120} width={120} />
      </Header>
      {children}
      <Text color="#757575" paddingY={4} fontWeight={300} fontSize={'xs'}>
        © Rokketlabs - 2022
      </Text>
    </Flex>
  )
}

export default LoginLayout
