import '../styles/globals.css'
import color from '../styles/color.module.scss'
import type { AppProps } from 'next/app'

function _App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} color={color.primaryColor} />
}

export default _App;
