import { useState } from 'react'
import {
  IoBuildOutline,
  IoHomeOutline,
  IoPersonOutline,
  IoStatsChartOutline,
  IoWalletOutline,
} from 'react-icons/io5'
import { Flex, Heading } from '@chakra-ui/react'

import ButtonSidebar from 'components/ButtonSidebar/ButtonSidebar'

export const Sidebar: React.FC = () => {
  const [index, setIndex] = useState(0)

  return (
    <Flex px={8} direction={'column'} minW={72} overflowY="auto">
      <Heading my={8} as="h2" variant={'sidebar'}>
        Rokket UI Dashboard
      </Heading>
      <ButtonSidebar
        mb={2}
        onClick={() => setIndex(0)}
        variant={index === 0 ? 'active' : ''}
        icon={IoHomeOutline}
        text="Dashboard"
      />
      <ButtonSidebar
        mb={2}
        variant={index === 1 ? 'active' : ''}
        onClick={() => setIndex(1)}
        icon={IoStatsChartOutline}
        text="Tables"
      />
      <ButtonSidebar
        mb={2}
        variant={index === 2 ? 'active' : ''}
        onClick={() => setIndex(2)}
        icon={IoWalletOutline}
        text="Billing"
      />

      <ButtonSidebar
        mb={2}
        variant={index === 3 ? 'active' : ''}
        onClick={() => setIndex(3)}
        icon={IoBuildOutline}
        text="RTL"
      />
      <Heading my={8} as="h2" variant={'sidebar'}>
        Account pages
      </Heading>

      <ButtonSidebar
        mb={2}
        variant={index === 4 ? 'active' : ''}
        onClick={() => setIndex(4)}
        icon={IoPersonOutline}
        text="Profile"
      />
    </Flex>
  )
}