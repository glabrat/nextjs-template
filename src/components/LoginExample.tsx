import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { LockIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Spacer,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { NextPage } from 'next'

import { CartContainer } from 'components/CartContainer'

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)

  const CFaUserAlt = chakra(FaUserAlt)

  return (
    <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
      <FormControl>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <CFaUserAlt color="gray.300" />
          </InputLeftElement>
          <Input type="email" placeholder="email address" />
        </InputGroup>
      </FormControl>
      <FormControl>
        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300">
            <LockIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
              {showPassword ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormHelperText textAlign="right">
          <Link>forgot password?</Link>
        </FormHelperText>
      </FormControl>
      <Button
        borderRadius={0}
        type="submit"
        variant="solid"
        colorScheme="teal"
        width="full"
      >
        Login
      </Button>
    </Stack>
  )
}

const LoginExample: NextPage = () => {
  const { onOpen } = useDisclosure()

  return (
    <>
      <Box py="4rem" px="4rem" minW="90vw">
        <Flex>
          <Heading as="h2" mb="0.75rem">
            Login Example
          </Heading>
          <Spacer />
          <Button colorScheme="green" onClick={onOpen}>
            Show Form Modal
          </Button>
        </Flex>
        <CartContainer>
          <Login />
        </CartContainer>
      </Box>
    </>
  )
}

export default LoginExample
