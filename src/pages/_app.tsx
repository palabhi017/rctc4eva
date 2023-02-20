import Navbar from '@/Components/Navbar'
// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar/>
    <ChakraProvider>
    <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
  
}
