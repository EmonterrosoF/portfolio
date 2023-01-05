import { FC, ReactNode } from 'react'

import Head from 'next/head'

import style from './layout.module.scss'
import { Header } from '../header/Header'
import { Poppins } from '@next/font/google'

interface props {
  children: ReactNode
}
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

export const Layout: FC<props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
      </Head>
      <div className={`${style.container} ${poppins.className}`}>
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}
