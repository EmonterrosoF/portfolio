import { FC, ReactNode } from 'react'

import Head from 'next/head'

import style from './layout.module.scss'
import { Header } from '../header/Header'
import { Poppins } from '@next/font/google'
import Footer from '../footer/Footer'

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
        <main className={style.main}>
          <svg
            className={style.wrapper}
            width="1867"
            height="1052"
            viewBox="0 0 1867 1052"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1744.51 535.129C1741.58 531.445 1738.6 527.754 1735.57 524.056C1734.35 525.533 1733.12 527.01 1731.89 528.487C1734.9 532.162 1737.87 535.836 1740.79 539.507C1742.04 538.047 1743.28 536.588 1744.51 535.129ZM1778.77 492.365C1776.31 487.587 1773.79 482.804 1771.2 478.018C1815.58 416.794 1847.13 357.054 1867 304.001C1838.35 344.442 1798.64 390.226 1747.94 437.987C1553.17 124.933 1055.43 -175.375 16 125.321C896.78 -100.351 1438.9 195.799 1699 481.722C1697.51 482.987 1696.01 484.253 1694.5 485.519C1438.17 207.468 909.729 -51.2806 5.56889 186.355C791.678 61.5379 1340.15 294.736 1642.18 527.412C1340.64 757.4 797.567 985.455 21.536 862.074C913.97 1096.94 1438.19 844.692 1695.02 570.178C1698.5 573.142 1701.95 576.104 1705.35 579.06C1437.44 864.214 892.512 1150.98 16 926.063C1048.46 1225.19 1552.53 937.198 1756.89 626.426C1800.94 669.331 1836 710.349 1862 747C1844.05 699.139 1816.63 645.86 1778.89 590.95C1779.96 589.122 1781.02 587.294 1782.06 585.466C1808.59 623.556 1829.85 660.202 1846 693.997C1838.89 647.934 1825.08 597.482 1803.43 545.469C1837.4 477.028 1857.78 409.857 1867 350.001C1846.13 393.733 1816.83 442.179 1778.77 492.365Z"
              fill="#CC35FF"
              fill-opacity="0.38"
            />
          </svg>

          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
