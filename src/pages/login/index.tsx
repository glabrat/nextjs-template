import { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { useLogin } from 'hooks/useLogin'
import { NextPage } from 'next'

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

const LoginSection: React.FC<Props> = ({ setRecovery }) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginData>()

  const {
    handleLogin,
    result: { loading },
  } = useLogin()

  const onSubmit = (data: LoginData) => {
    handleLogin(data)
  }

  if (loading) return <div>Cargando..</div>

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="email">Correo</FormLabel>
          <Input variant="flushed" mb="16px" {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <Input
            variant="flushed"
            mb="16px"
            type="password"
            {...register('password')}
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit">Entrar</Button>
      </form>
      <ChakraLink onClick={() => setRecovery(true)}>
        Recuperar Contraseña
      </ChakraLink>
    </>
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
        Ingresa el correo asociado a esta cuenta
        <FormControl>
          <FormLabel htmlFor="email">Correo</FormLabel>
          <Input variant="flushed" mb="16px" {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit">Enviar Correo</Button>
      </form>
      <ChakraLink onClick={() => setRecovery(false)}>Volver</ChakraLink>
    </>
  )
}

const Login: NextPage = () => {
  const [recovery, setRecovery] = useState(false)

  let section

  if (recovery) section = <PasswordRecoverySection setRecovery={setRecovery} />
  else section = <LoginSection setRecovery={setRecovery} />

  return <Box textAlign="center">{section}</Box>
}

export default Login
