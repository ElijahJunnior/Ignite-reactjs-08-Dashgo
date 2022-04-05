// REACT / NEXT
import { AppProps } from 'next/app';

// REACT QUERY
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '../services/queryClient';

// FAKE API
import { makeServer } from '../services/mirage';

// CHAKRA E TEMA
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme';

// COMPONENTES
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext';

if (process.env.NODE_ENV == 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} >
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
