import { Box, Flex, Stack } from '@chakra-ui/react'

export const CartContainer: React.FC = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt="15%"
    >
      <Stack
        flexDir="column"
        mb="10%"
        width={{ base: '100%' }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width={[
            '85%', // 0-30em
            '75%', // 30em-48em
            '70%', // 48em-62em
            '30%', // 62em+
          ]}
          height={{
            base: '90%', // 0-48em
            md: '50%', // 48em-80em,
            xl: '25%', // 80em+
          }}
        >
          {children}
        </Box>
      </Stack>
    </Flex>
  )
}
