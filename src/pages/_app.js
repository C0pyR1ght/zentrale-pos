import 'react-notifications-component/dist/theme.css'
import 'src/index.css'
import 'react-confirm-alert/src/react-confirm-alert.css'
import 'src/App.css'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'

export default function MyApp({ Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Zentrale POS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}
