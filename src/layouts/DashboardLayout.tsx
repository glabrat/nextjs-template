import { MdExitToApp, MdOutlineAccountCircle } from 'react-icons/md'
import { Box, Flex, Icon, Image } from '@chakra-ui/react'

import ButtonHeader from 'components/ButtonHeader'
import Header from 'components/Header'

const DashboardLayout: React.FC<{
  islogin: boolean
  handleLogout: () => void
}> = ({ children, islogin, handleLogout }) => {
  return (
    <Flex direction={'column'} height={'100vh'} width={'100%'} bg="white">
      <Header direction={'row'} justify={'space-between'} islogin={islogin}>
        <Image ml={8} src="/rokketlabs.svg" height={120} width={120} />
        <Flex>
          <ButtonHeader
            icon={
              <Icon
                mt={2}
                h={[6, 10]}
                w={[6, 10]}
                as={MdOutlineAccountCircle}
              />
            }
            text="Mi cuenta"
          ></ButtonHeader>
          <ButtonHeader
            handleClick={handleLogout}
            icon={<Icon mt={2} h={[6, 10]} w={[6, 10]} as={MdExitToApp} />}
            active
            text="Cerrar sesión"
          ></ButtonHeader>
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
