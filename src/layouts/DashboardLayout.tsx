import { useState } from 'react'
import {
  IoBuildOutline,
  IoDocumentOutline,
  IoHomeOutline,
  IoPersonOutline,
  IoStatsChartOutline,
  IoWalletOutline,
} from 'react-icons/io5'
import { Flex, Heading } from '@chakra-ui/react'

import ButtonSidebar from 'components/ButtonSidebar/ButtonSidebar'

const DashboardLayout: React.FC = ({ children }) => {
  const [index, setIndex] = useState(0)

  return (
    <Flex height={'100vh'} width={'100%'} bg="gray.50">
      <Flex py={4} px={8} direction={'column'} width={72} overflowY="auto">
        <Heading p={3} mb={4} as="h2" variant={'sidebar'}>
          Rokket UI Dashboard
        </Heading>
        <ButtonSidebar
          mb={3}
          onClick={() => setIndex(0)}
          variant={index === 0 ? 'active' : ''}
          icon={IoHomeOutline}
          text="Dashboard"
        />
        <ButtonSidebar
          mb={3}
          variant={index === 1 ? 'active' : ''}
          onClick={() => setIndex(1)}
          icon={IoStatsChartOutline}
          text="Tables"
        />
        <ButtonSidebar
          mb={3}
          variant={index === 2 ? 'active' : ''}
          onClick={() => setIndex(2)}
          icon={IoWalletOutline}
          text="Billing"
        />

        <ButtonSidebar
          mb={3}
          variant={index === 3 ? 'active' : ''}
          onClick={() => setIndex(3)}
          icon={IoBuildOutline}
          text="RTL"
        />
        <Heading p={3} my={4} as="h2" variant={'sidebar'}>
          Account pages
        </Heading>

        <ButtonSidebar
          mb={3}
          variant={index === 4 ? 'active' : ''}
          onClick={() => setIndex(4)}
          icon={IoPersonOutline}
          text="Profile"
        />
        <ButtonSidebar
          mb={3}
          variant={index === 5 ? 'active' : ''}
          onClick={() => setIndex(5)}
          icon={IoDocumentOutline}
          text="Sign in"
        />
      </Flex>
      {children}
    </Flex>
  )
}

export default DashboardLayout
