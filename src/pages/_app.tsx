import { QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

import { AuthGuard } from 'components/AuthGuard'
import { MainLayout } from 'layouts/MainLayout'
import { queryClient } from 'lib/queryClient'

import { AuthProvider } from '../context/AuthContext'
import theme from '../theme/theme'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
          <AuthProvider>
            <AuthGuard>
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </AuthGuard>
          </AuthProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default MyApp
