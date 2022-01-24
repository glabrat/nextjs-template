import { useState } from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { Flex, Heading } from '@chakra-ui/react'

import ButtonSidebar from 'components/ButtonSidebar/ButtonSidebar'

const DashboardLayout: React.FC = ({ children }) => {
  const [index, setIndex] = useState(0)

  return (
    <Flex height={'100vh'} width={'100%'} bg="gray.50">
      <Flex py={12} px={8} direction={'column'} width={72}>
        <Heading
          mb={8}
          as="h2"
          textTransform={'uppercase'}
          fontWeight={600}
          size={'xs'}
        >
          Rokket UI Dashboard
        </Heading>
        <ButtonSidebar
          onClick={() => setIndex(0)}
          variant={index === 0 ? 'active' : ''}
          icon={IoHomeOutline}
          text="Dashboard"
        />
        <ButtonSidebar
          variant={index === 1 ? 'active' : ''}
          onClick={() => setIndex(1)}
          icon={IoHomeOutline}
          text="Tables"
        />
        <ButtonSidebar
          variant={index === 2 ? 'active' : ''}
          onClick={() => setIndex(2)}
          icon={IoHomeOutline}
          text="Billing"
        />

        <ButtonSidebar
          variant={index === 3 ? 'active' : ''}
          onClick={() => setIndex(3)}
          icon={IoHomeOutline}
          text="RTL"
        />
        <h2>Account pages</h2>

        <ButtonSidebar
          variant={index === 4 ? 'active' : ''}
          onClick={() => setIndex(4)}
          icon={IoHomeOutline}
          text="Profile"
        />
        <ButtonSidebar
          variant={index === 5 ? 'active' : ''}
          onClick={() => setIndex(5)}
          icon={IoHomeOutline}
          text="Sign in"
        />
      </Flex>
      {children}
    </Flex>
  )
}

export default DashboardLayout
