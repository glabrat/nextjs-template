import { QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { AuthGuard } from 'components/AuthGuard'
import { MainLayout } from 'layouts/MainLayout'
import { queryClient } from 'lib/queryClient'

import theme from '../theme/theme'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
          <AuthGuard>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </AuthGuard>
        </ChakraProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default MyApp
