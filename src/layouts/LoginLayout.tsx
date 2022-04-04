import { Flex, Image, Text } from '@chakra-ui/react'

import Header from '../components/Header'

const LoginLayout: React.FC = ({ children }) => {
  return (
    <Flex
      direction={'column'}
      justify={'space-between'}
      align={'center'}
      minH="100vh"
      bg={'background'}
    >
      <Header align="center">
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
