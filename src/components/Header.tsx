import { Flex, FlexProps } from '@chakra-ui/react'
import { User } from 'context/AuthContext'

const Header: React.FC<FlexProps & { user: User | undefined }> = props => {
  const { user, children, ...rest } = props

  return (
    <Flex {...rest} boxShadow={user ? 'rgb(0 0 0 / 16%) 0px 3px 6px' : ''}>
      {children}
    </Flex>
  )
}

export default Header
