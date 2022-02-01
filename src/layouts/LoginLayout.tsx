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
      bg={'background'}
    >
      <Header user={user} align="center">
        <Image
          src="/rokketlabs.svg"
          height={'3.1875rem'}
          width={'8.9375rem'}
          marginTop={'2.5rem'}
        />
      </Header>
      {children}
      <Text color="#212C39" paddingY={4} fontWeight={400} fontSize={'xs'}>
        © Rokketlabs - 2022
      </Text>
    </Flex>
  )
}

export default LoginLayout
