import { useRef } from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'

import { Sidebar } from 'components/Sidebar'

const DashboardLayout: React.FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef() as React.MutableRefObject<HTMLButtonElement>

  return (
    <Flex height={'100vh'} width={'100%'} bg="gray.50">
      <Box display={{ base: 'none', lg: 'flex' }}>
        <Sidebar />
      </Box>

      <Flex direction={'column'} width={'100%'}>
        <IconButton
          display={{ lg: 'none' }}
          ref={btnRef}
          onClick={onOpen}
          aria-label="Search database"
          icon={<Icon as={IoMenuOutline} />}
        />
        <Box overflow={'auto'}>{children}</Box>
      </Flex>

      <Drawer
        isFullHeight={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent height={'90vh'} ml={4} my={'auto'} borderRadius={'lg'}>
          <DrawerCloseButton />

          <DrawerBody>
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default DashboardLayout
