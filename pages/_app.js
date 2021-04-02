import '../styles/globals.css'
import '../styles/index.css'
import '../styles/post.css'
import '../styles/hljs.css'
import 'antd/dist/antd.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import * as gtag from '../utils/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
