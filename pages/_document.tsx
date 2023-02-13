import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body id="home" style={{ overflowX: 'hidden' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
