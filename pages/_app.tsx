import { Sairin } from '@sairinjs/core'

import sairinConfig from '../sairin.config'

// import theme style
import "@sairinjs/sairin-theme-minimal/style.css";

import './custom.css'

export const sairin = new Sairin(sairinConfig)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
