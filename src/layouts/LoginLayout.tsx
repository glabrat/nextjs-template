import { Flex, Image, Text } from '@chakra-ui/react'
import { User } from 'context/AuthContext'

import Header from '../components/Header'

const LoginLayout: React.FC<{ user: User | undefined }> = ({
  children,
  user,
}) => {
  return (
    <Flex
      direction={'column'}
      justify={'space-between'}
      align={'center'}
      minH="100vh"
      bg="#eee"
    >
      <Header user={user} align="center">
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
