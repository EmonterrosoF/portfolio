import { FC, ReactNode } from 'react'

import Head from 'next/head'

import style from './layout.module.scss'
import { Header } from '../header/Header'
import { Inter } from '@next/font/google'
import Footer from '../footer/Footer'
import Script from 'next/script'
import { useRouter } from 'next/router'

interface props {
  children: ReactNode
}
const poppins = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

export const Layout: FC<props> = ({ children }) => {
  const router = useRouter()
  console.log(router.locale)

  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio | Edras Monterroso</title>
        <meta
          name="description"
          content={
            router.locale === 'en'
              ? 'This is my portfolio where I show my information and some of the projects I did'
              : 'Este es mi portfolio donde muestro mi información y algunos de los proyecto que he realizado'
          }
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="author"
          content="portfolio-edrasmonterroso.vercel.app"
        ></meta>
        <meta
          name="keywords"
          content="portfolio Edras Monterroso projects proyectos project proyecto"
        ></meta>
      </Head>
      <div className={`${style.container} ${poppins.className}`}>
        <Header />
        <div className={style.Grapper}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              className="wave"
              // fill="#000"
              fill-opacity="1"
              d="M0,320L120,282.7C240,245,480,171,720,122.7C960,75,1200,53,1320,42.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
        </div>
        <main className={style.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
