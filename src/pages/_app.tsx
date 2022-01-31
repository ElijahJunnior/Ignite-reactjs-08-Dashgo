import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react'
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
