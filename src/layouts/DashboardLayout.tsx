import { Box, Flex, Image } from '@chakra-ui/react'

import Header from 'components/Header'

const DashboardLayout: React.FC<{ isLogin: boolean }> = ({
  children,
  isLogin,
}) => {
  return (
    <Flex direction={'column'} height={'100vh'} width={'100%'} bg="white">
      <Header isLogin={isLogin}>
        <Flex justify={'space-between'} width={'100%'} height={'100%'}>
          <Image ml={8} src="/rokketlabs.svg" height={120} width={120} />
          <Flex></Flex>
        </Flex>
      </Header>
      <Flex direction={'row'} height={'100%'}>
        <Flex
          boxShadow={'rgb(0 0 0 / 16%) 0px 3px 6px'}
          height={['85vh', '82vh']}
          width={28}
        ></Flex>
        <Box height={['85vh', '82vh']} width={'100%'} overflowY={'scroll'}>
          {children}
        </Box>
      </Flex>
    </Flex>
  )
}

export default DashboardLayout
