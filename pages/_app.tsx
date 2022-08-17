import '../styles/globals.css'
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout'
import { useEffect } from 'react'



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('tw-elements')
  })
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
