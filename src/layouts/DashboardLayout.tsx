import { Box, Flex } from '@chakra-ui/react'

import HeaderDashboard from 'components/HeaderDashboard'
import { Sidebar } from 'components/Sidebar'

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Flex height={'100vh'} width={'100%'} bg="gray.50">
      <Box display={{ base: 'none', md: 'flex' }}>
        <Sidebar />
      </Box>

      <Flex direction={'column'} width={'100%'} overflow={'auto'}>
        <HeaderDashboard />

        <Box mx={{ lg: 8 }} m={{ base: 2, md: 0 }}>
          {children}
        </Box>
      </Flex>
    </Flex>
  )
}

export default DashboardLayout
