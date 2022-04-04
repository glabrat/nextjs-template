import { Flex, FlexProps } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'

const Header: React.FC<FlexProps> = props => {
  const { children, ...rest } = props
  const { data: session } = useSession()

  return (
    <Flex {...rest} boxShadow={session ? 'rgb(0 0 0 / 16%) 0px 3px 6px' : ''}>
      {children}
    </Flex>
  )
}

export default Header
