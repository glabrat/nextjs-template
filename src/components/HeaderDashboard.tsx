import { useRef } from 'react'
import { IoMenu, IoNotifications, IoPerson, IoSettings } from 'react-icons/io5'
import { SearchIcon } from '@chakra-ui/icons'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react'

import { Sidebar } from 'components/Sidebar'

const HeaderDashboard: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef() as React.MutableRefObject<HTMLButtonElement>

  return (
    <>
      <Flex
        direction={{ lg: 'row' }}
        wrap={{ base: 'wrap', lg: 'nowrap' }}
        align={'center'}
        py={{ lg: 1 }}
        px={{ lg: 8 }}
        minH={20}
      >
        <Flex
          direction={'column'}
          justify={'center'}
          order={{ base: 2, lg: 0 }}
          ml={{ base: 2, lg: 0 }}
          mt={{ base: 2, lg: 0 }}
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mt={1} as="h2" variant={'header'}>
            Dashboard
          </Heading>
        </Flex>
        <Spacer display={{ base: 'none', lg: 'block' }} />
        <InputGroup
          order={{ base: 1, lg: 0 }}
          w={{ base: '100%', lg: '48' }}
          mt={{ base: 4, lg: 0 }}
          ml={2}
          mr={4}
        >
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.700" />
          </InputLeftElement>
          <Input variant="header" type="text" placeholder="Type here..." />
        </InputGroup>
        <IconButton
          variant={'ghost'}
          display={{ lg: 'none' }}
          ref={btnRef}
          onClick={onOpen}
          aria-label="Search database"
          icon={<Icon color={'gray.500'} as={IoMenu} />}
        />
        <Spacer display={{ lg: 'none' }} />
        <Icon m={2} color={'gray.500'} as={IoPerson} />
        <Button variant="ghost" color={'gray.500'}>
          Sign in
        </Button>
        <Icon m={2} color={'gray.500'} as={IoSettings} />
        <Icon
          ml={2}
          mr={{ base: 4, lg: 0 }}
          color={'gray.500'}
          as={IoNotifications}
        />
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
    </>
  )
}

export default HeaderDashboard
