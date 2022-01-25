import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaUserAlt } from 'react-icons/fa'
import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link as ChakraLink,
  Stack,
} from '@chakra-ui/react'
import { useLogin } from 'hooks/useAuth'
import { NextPage } from 'next'

import { CartContainer } from 'components/CartContainer'

type LoginData = {
  email: string
  password: string
}

type PasswordRecoveryData = {
  email: string
}

type Props = {
  setRecovery: Dispatch<SetStateAction<boolean>>
}

const CFaUserAlt = chakra(FaUserAlt)

const LoginSection: React.FC<Props> = ({ setRecovery }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)

  const {
    formState: { errors },
    setError,
    register,
    handleSubmit,
  } = useForm<LoginData>()

  const {
    handleLogin,
    result: { loading, error },
  } = useLogin()

  const onSubmit = (data: LoginData) => {
    handleLogin(data)
  }

  useEffect(() => {
    if (error && !loading)
      setError('password', {
        type: 'manual',
        message: 'El correo electrónico y/o la contraseña es/son incorrectos',
      })
  }, [error, loading, setError])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={6}
        p="1rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
      >
        <FormControl
          isInvalid={error && Boolean(!!errors.password || !!errors.email)}
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CFaUserAlt color="gray.300" />
            </InputLeftElement>
            <Input
              isDisabled={loading}
              type="email"
              placeholder="Correo electrónico"
              variant="flushed"
              {...register('email')}
            />
          </InputGroup>
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={error && Boolean(!!errors.password || !!errors.email)}
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <LockIcon color="gray.300" />
            </InputLeftElement>
            <Input
              isDisabled={loading}
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              variant="flushed"
              {...register('password')}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                isDisabled={loading}
                onClick={handleShowClick}
              >
                {!showPassword ? (
                  <ViewOffIcon></ViewOffIcon>
                ) : (
                  <ViewIcon></ViewIcon>
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Stack alignSelf="center" alignContent="center" alignItems="center">
          <Button
            isLoading={loading}
            loadingText="Cargando"
            type="submit"
            variant="paris-primary"
          >
            Login
          </Button>
          <ChakraLink
            color="cyan.500"
            onClick={() => setRecovery(true)}
            alignSelf="center"
          >
            Recuperar Contraseña
          </ChakraLink>
        </Stack>
      </Stack>
    </form>
  )
}

const PasswordRecoverySection: React.FC<Props> = ({ setRecovery }) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<PasswordRecoveryData>()

  const onSubmit = async (data: PasswordRecoveryData) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={6}
          p="1rem"
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
        >
          <FormLabel htmlFor="password">
            Ingresa el correo asociado a esta cuenta
          </FormLabel>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <CFaUserAlt color="gray.300" />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Correo electrónico"
                variant="flushed"
                {...register('email')}
              />
            </InputGroup>
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <Stack alignSelf="center" alignContent="center" alignItems="center">
            <Button type="submit" variant="paris-primary">
              Login
            </Button>
            <ChakraLink
              color="cyan.500"
              onClick={() => setRecovery(false)}
              alignSelf="center"
            >
              Volver
            </ChakraLink>
          </Stack>
        </Stack>
      </form>
    </>
  )
}

const Login: NextPage = () => {
  const [recovery, setRecovery] = useState(false)

  let section

  if (recovery) section = <PasswordRecoverySection setRecovery={setRecovery} />
  else section = <LoginSection setRecovery={setRecovery} />

  return (
    <Box px={[null, '4rem']} minW="90vw">
      <CartContainer>{section}</CartContainer>
    </Box>
  )
}

export default Login
