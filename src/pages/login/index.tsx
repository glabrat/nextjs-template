import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useForm, UseFormRegister } from 'react-hook-form'
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
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

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

type InputProps<T> = {
  register: UseFormRegister<T>
  loading: boolean
}

type PasswordProps<T> = {
  register: UseFormRegister<T>
  loading: boolean
  showPassword: boolean
  handleShowClick: () => void
}

const CFaUserAlt = chakra(FaUserAlt)

const UserInput: React.FC<InputProps<LoginData>> = ({ register, loading }) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <CFaUserAlt color="gray.300" width="24px" height="24px" />
      </InputLeftElement>
      <Input
        isDisabled={loading}
        type="email"
        color="gray.300"
        borderColor="gray.300"
        paddingLeft="56px"
        placeholder="Correo electrónico"
        _placeholder={{ color: 'gray.300', opacity: 1 }}
        variant="flushed"
        {...register('email')}
      />
    </InputGroup>
  )
}

const PasswordInput: React.FC<PasswordProps<LoginData>> = ({
  register,
  loading,
  showPassword,
  handleShowClick,
}) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" color="gray.300">
        <LockIcon color="gray.300" width="24px" height="24px" />
      </InputLeftElement>
      <Input
        isDisabled={loading}
        type={showPassword ? 'text' : 'password'}
        placeholder="Contraseña"
        _placeholder={{ color: 'gray.300', opacity: 1 }}
        color="gray.300"
        paddingLeft="56px"
        borderColor="gray.300"
        variant="flushed"
        {...register('password')}
      />
      <InputRightElement width="4.5rem">
        <Button
          h="1.75rem"
          size="sm"
          isDisabled={loading}
          onClick={handleShowClick}
          color="gray.300"
        >
          {!showPassword ? (
            <ViewOffIcon width="24px" height="24px"></ViewOffIcon>
          ) : (
            <ViewIcon width="24px" height="24px"></ViewIcon>
          )}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

const LoginSection: React.FC<Props> = ({ setRecovery }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setErrorStatus] = useState<boolean>(false)
  const router = useRouter()

  const handleShowClick = () => setShowPassword(!showPassword)

  const {
    formState: { errors },
    setError,
    register,
    handleSubmit,
  } = useForm<LoginData>()

  const onSubmit = async (data: LoginData) => {
    setLoading(true)

    const response = await signIn<'credentials'>('credentials', {
      redirect: false,
      username: data.email,
      password: data.password,
    })

    if (response) {
      if (response.error) setErrorStatus(true)

      if (response.ok) {
        setErrorStatus(false)
        router.push('/dashboard')
      }
    }

    setLoading(false)
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
        p="2rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
        borderRadius={'0.75rem'}
      >
        <FormLabel
          textAlign={'center'}
          fontSize={'1.5rem'}
          fontWeight={600}
          lineHeight={'2.25rem'}
          marginBottom={'2rem'}
          color="#212C39"
        >
          Iniciar sesión
        </FormLabel>
        <FormControl
          isInvalid={error && Boolean(!!errors.password || !!errors.email)}
        >
          <UserInput register={register} loading={loading}></UserInput>
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={error && Boolean(!!errors.password || !!errors.email)}
        >
          <PasswordInput
            register={register}
            loading={loading}
            showPassword={showPassword}
            handleShowClick={handleShowClick}
          ></PasswordInput>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Stack alignSelf="center" alignContent="center" alignItems="center">
          <Button
            isLoading={loading}
            loadingText="Cargando"
            type="submit"
            variant="paris-primary"
          >
            Ingresar
          </Button>
          <ChakraLink
            variant="paris-email-recovery"
            onClick={() => setRecovery(true)}
          >
            ¿Olvidaste tu contraseña?
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
          p="2rem"
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
          borderRadius={'0.75rem'}
        >
          <FormLabel
            textAlign={'center'}
            fontSize={'1.5rem'}
            fontWeight={600}
            lineHeight={'2.25rem'}
            marginBottom={'2rem'}
            color="#212C39"
          >
            Recuperar contraseña
          </FormLabel>
          <FormLabel
            fontSize={'1.125rem'}
            fontWeight={400}
            lineHeight={'2.25rem'}
            minH={'2.5rem'}
            pl={'0.5rem'}
            color="#212C39"
          >
            Ingrese el correo asociado a esta cuenta
          </FormLabel>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none" color="gray.300">
                <CFaUserAlt color="gray.300" width="24px" height="24px" />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Correo electrónico"
                _placeholder={{ color: 'gray.300', opacity: 1 }}
                color="gray.300"
                paddingLeft="56px"
                borderColor="gray.300"
                variant="flushed"
                {...register('email')}
              />
            </InputGroup>
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <Stack alignSelf="center" alignContent="center" alignItems="center">
            <Button type="submit" variant="paris-primary">
              Ingresar
            </Button>
            <ChakraLink
              variant="paris-email-recovery"
              onClick={() => setRecovery(false)}
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
