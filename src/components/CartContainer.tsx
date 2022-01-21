import { Box, Center, Flex, Stack } from '@chakra-ui/react'

export const CartContainer: React.FC = ({ children }) => {
  const baseTitle = 'Rokket Labs NextJS Template'

  return (
    <Flex
      flexDirection="column"
      // width="100wh"
      // height="100vh"
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
            '90%', // 0-30em
            '80%', // 30em-48em
            '75%', // 48em-62em
            '40%', // 62em+
          ]}
          height={{
            base: '90%', // 0-48em
            md: '50%', // 48em-80em,
            xl: '25%', // 80em+
          }}
        >
          <Stack
            spacing={4}
            p="1px"
            backgroundColor="whiteAlpha.900"
            boxShadow="sm"
          >
            <Box padding="0px 1rem 1rem 1rem" mt="-50px">
              <Center
                bgGradient="linear(to-tr, #00B0FF, #40C4FF)"
                w="100%"
                p="4"
                color="white"
                mt="20px"
                boxShadow="lg"
                rounded="md"
              >
                {baseTitle}
              </Center>
            </Box>
          </Stack>
          {children}
        </Box>
      </Stack>
    </Flex>
  )
}
