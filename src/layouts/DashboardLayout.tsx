import { MdExitToApp, MdOutlineAccountCircle } from 'react-icons/md'
import { Box, Flex, Icon, Image } from '@chakra-ui/react'
import { User } from 'context/AuthContext'
import { useLogout } from 'hooks/useAuth'

import ButtonHeader from 'components/ButtonHeader'
import Header from 'components/Header'

const DashboardLayout: React.FC<{
  user: User | undefined
}> = ({ children, user }) => {
  const { handleLogout } = useLogout()

  return (
    <Flex direction={'column'} height={'100vh'} width={'100%'} bg="white">
      <Header direction={'row'} justify={'space-between'} user={user}>
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
          width={32}
        ></Flex>
        <Box height={['85vh', '82vh']} width={'100%'} overflowY={'scroll'}>
          {children}
        </Box>
      </Flex>
    </Flex>
  )
}

export default DashboardLayout
