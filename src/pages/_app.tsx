import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import {SessionProvider as NextAuthProvider, SessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <SessionProvider session={pageProps.session}>
        <Header/>
        <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
