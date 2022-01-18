import { useForm } from 'react-hook-form'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { signIn } from 'next-auth/client'

type LoginData = {
  username: string
  password: string
}

const Login: NextPage = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginData>()

  const onSubmit = async (data: LoginData) => {
    signIn('credentials', { ...data, callbackUrl: '/' })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input {...register('username')} />
        <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input type="password" {...register('password')} />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
      <Button type="submit">Login</Button>
    </form>
  )
}

export default Login
