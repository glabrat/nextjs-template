import { Flex, FlexProps } from '@chakra-ui/react'
import { User } from 'context/AuthContext'

const Header: React.FC<FlexProps & { user: User | undefined }> = props => {
  const { user, children, ...rest } = props

  return (
    <Flex
      {...rest}
      bg={user ? 'white' : 'grey'}
      boxShadow={user ? 'rgb(0 0 0 / 16%) 0px 3px 6px' : ''}
      width={'100%'}
    >
      {children}
    </Flex>
  )
}

export default Header
