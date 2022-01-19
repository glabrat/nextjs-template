import { Flex, IconProps, Text } from '@chakra-ui/react'

interface IButtonHeader {
  text: string
  active?: boolean
  icon: IconProps
  handleClick?: () => void
}

const ButtonHeader: React.FC<IButtonHeader> = ({
  text,
  active = false,
  icon,
  handleClick,
}) => {
  return (
    <Flex
      onClick={handleClick}
      justify={'center'}
      align={'center'}
      color={active ? 'white' : 'black'}
      boxShadow={'md'}
      _hover={{
        bg: '#00B0FF',
        color: 'white',
      }}
      cursor={'pointer'}
      bg={active ? '#003f6d' : 'white'}
      height={'100%'}
      width={[20, 28]}
      direction={'column'}
    >
      {icon}
      <Text fontSize={[12, 'sm']}>{text}</Text>
    </Flex>
  )
}

export default ButtonHeader
