import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Poppins } from '@next/font/google'

import { IntlProvider } from 'react-intl'

import '../styles/reset.scss'
import '../styles/globals.scss'
import { Layout } from '../components'

import en from '../lang/en.json'
import es from '../lang/es.json'

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()

  function messages(): any {
    if (locale === 'en') return en
    else if (locale === 'es') return es
  }

  return (
    <IntlProvider locale={locale ?? 'en'} messages={messages()}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  )
}
