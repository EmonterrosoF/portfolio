import { useRef, useState } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

import { BsMoon, BsSun } from 'react-icons/bs'
import { AiFillHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { HiComputerDesktop, HiOutlineLanguage } from 'react-icons/hi2'
import { GiSkills } from 'react-icons/gi'
import { IoIosContact } from 'react-icons/io'

import style from './header.module.scss'

import { SvgLogo } from '../../components/Logo'
import { useTheme } from '../../hooks/useTheme'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { useObserver } from '../../hooks/useObserver'

import Navigation from './Navigation'

const modeButtons = [
  {
    mode: 'dark',
  },
  {
    mode: 'light',
  },
  {
    mode: 'system',
  },
]

export const navigation = [
  {
    name: 'principal',
    href: '/#home',
    id: 'Principal',
    scroll: false,
    icon: <AiFillHome className={style.icon} />,
  },
  {
    name: 'projects',
    href: '/#projects',
    id: 'Projects',
    scroll: false,
    icon: <AiOutlineFundProjectionScreen className={style.icon} />,
  },
  {
    name: 'skills',
    href: '/#skills',
    id: 'Skills',
    scroll: false,
    icon: <GiSkills className={style.icon} />,
  },
  {
    name: 'contact',
    href: '/#contact',
    id: 'Contact',
    scroll: false,
    icon: <IoIosContact className={style.icon} />,
  },
]

const theme = {
  dark: <BsMoon className={style.headerTheme} />,
  light: <BsSun className={style.headerTheme} />,
  system: <HiComputerDesktop className={style.headerTheme} />,
}

export const Header = () => {
  const [active, setActive] = useState(false)

  const { value, setValue } = useTheme()
  useObserver(navigation)

  const refOptions = useRef<HTMLUListElement>(null)
  const refButtonOptions = useRef<HTMLButtonElement>(null)

  const handleClickOutsideFn = () => {
    setActive(false)
    const main = document.querySelector('main') || undefined
    if (main !== undefined) {
      main.style.filter = 'none'
    }
  }
  useOnClickOutside(refOptions, handleClickOutsideFn, refButtonOptions)

  const { locales, locale } = useRouter()

  if (typeof window !== 'undefined') {
    let media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', (e) => {
      if (!('theme' in localStorage)) {
        e.matches
          ? document.body.classList.add('dark')
          : document.body.classList.remove('dark')
      }
    })
  }
  return (
    <header className={style.header}>
      <Link href={'/#home'} className={style.headerLogo} scroll={false}>
        <svg
          width="90"
          height="50"
          viewBox="0 0 90 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.8762 15.6006C44.4374 11.7028 44.6734 8.40001 45.2212 7.23584C41.4284 10.8577 39.9955 16.0318 39.7848 17.2822C39.5741 18.5326 39.237 21.2921 40.122 23.448C40.83 25.1727 43.8727 28.6508 45.3055 30.1743C46.036 31.0222 47.6149 33.1149 48.0869 34.7016C48.5589 36.2883 48.7612 38.7259 48.8033 39.7463C50.3767 38.0072 53.6244 33.5374 54.029 29.5706C54.619 23.836 52.1747 20.4729 47.8762 15.6006Z"
            fill="url(#paint0_linear_123_55)"
          />
          <path
            d="M47.2132 35.8976C47.9125 40.0024 46.3681 43.0407 45.5085 44.0468C45.5085 43.8456 45.3424 43.1241 44.678 41.8478C44.0136 40.5715 42.4197 39.2464 41.7058 38.7434L39.6077 37.1911C39.1706 36.8318 38.2527 36.0701 38.0779 35.8976C37.8593 35.682 36.4606 34.3454 36.1984 31.0254C35.9886 28.3693 37.5679 24.3997 38.3839 22.7468C38.279 24.575 40.8462 27.5616 42.1429 28.8264L43.8475 30.5079C44.8092 31.4278 46.8285 33.7935 47.2132 35.8976Z"
            fill="url(#paint1_linear_123_55)"
          />
          <path
            d="M29.5851 11.2474L16.6001 24.2662L12.7945 28.1496C12.7945 28.1496 10.5156 30.2762 10.1287 30.5205C7.13608 32.2449 4.12344 31.0091 2.99118 30.1757C-2.61561 25.4165 0.927572 20.402 3.40001 18.4897C3.40001 18.4897 18.2769 3.05683 20.0828 1.67736C21.8887 0.297886 26.3174 -1.54716 29.5851 2.28088C32.8529 6.10891 30.9467 9.8536 29.5851 11.2474Z"
            fill="#CC35FF"
          />
          <path
            d="M1.80431 29.1842L14.7894 42.203L18.595 46.0863C18.595 46.0863 20.8738 48.213 21.2608 48.4573C24.2534 50.1816 27.266 48.9459 28.3982 48.1124C34.005 43.3533 30.4619 38.3388 27.9894 36.4264C27.9894 36.4264 13.1125 20.9936 11.3066 19.6141C9.50075 18.2347 5.07208 16.3896 1.80431 20.2176C-1.46345 24.0457 0.442743 27.7904 1.80431 29.1842Z"
            fill="url(#paint2_linear_123_55)"
          />
          <path
            d="M60.4149 11.2477L73.3999 24.2664L77.2055 28.1498C77.2055 28.1498 79.4844 30.2765 79.8713 30.5208C82.8639 32.2451 85.8766 31.0093 87.0088 30.1759C92.6156 25.4167 89.0724 20.4023 86.6 18.4899C86.6 18.4899 71.7231 3.05707 69.9172 1.6776C68.1113 0.29813 63.6826 -1.54691 60.4149 2.28112C57.1471 6.10915 59.0533 9.85384 60.4149 11.2477Z"
            fill="#CC35FF"
          />
          <path
            d="M88.1957 29.1845L75.2106 42.2032L71.405 46.0866C71.405 46.0866 69.1262 48.2133 68.7392 48.4575C65.7466 50.1819 62.734 48.9461 61.6018 48.1127C55.995 43.3535 59.5381 38.339 62.0106 36.4267C62.0106 36.4267 76.8875 20.9938 78.6934 19.6144C80.4992 18.2349 84.9279 16.3899 88.1957 20.2179C91.4635 24.0459 89.5573 27.7906 88.1957 29.1845Z"
            fill="url(#paint3_linear_123_55)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_123_55"
              x1="41.597"
              y1="27.2854"
              x2="53.1119"
              y2="7.46197"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CC35FF" />
              <stop offset="1" stop-color="#4CA5FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_123_55"
              x1="41.7846"
              y1="22.7468"
              x2="41.7846"
              y2="44.0468"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CC35FF" />
              <stop offset="1" stop-color="#4CA5FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_123_55"
              x1="7.73945"
              y1="9.40104"
              x2="38.5744"
              y2="29.9331"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BF00FF" />
              <stop offset="1" stop-color="#4CA5FF" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_123_55"
              x1="82.2605"
              y1="9.40128"
              x2="51.4256"
              y2="29.9333"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BF00FF" />
              <stop offset="1" stop-color="#4CA5FF" />
            </linearGradient>
          </defs>
        </svg>
      </Link>
      <nav className={style.headerNav}>
        <ul className={style.headerUl}>
          {navigation.map((navigation, index) => (
            <Navigation key={index} navigation={navigation}></Navigation>
          ))}
        </ul>
      </nav>
      <div className={style.headerRight}>
        <div className={style.headerLang}>
          {locales?.sort().map((local) => (
            <Link
              className={
                locale === local
                  ? `${style.langSelected} ${style.headerLinkLang}`
                  : `${style.headerLinkLang}`
              }
              key={local}
              href="/"
              locale={local}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <HiOutlineLanguage />
              </span>
              {local}
            </Link>
          ))}
        </div>

        <button
          className={style.headerButtonTheme}
          ref={refButtonOptions}
          onClick={() => {
            setActive(!active)
            const main = document.querySelector('main') || undefined
            if (main?.style.filter.includes('blur(8px)')) {
              main.style.filter = 'none'
            } else if (main !== undefined) {
              main.style.filter = 'blur(8px)'
            }
          }}
        >
          {theme[value as keyof typeof theme]}
        </button>
        <ul
          className={
            active
              ? `${style.ulThemeActive} ${style.headerUlTheme}`
              : style.headerUlTheme
          }
          ref={refOptions}
        >
          {modeButtons?.map(({ mode }, index) => {
            return (
              <li
                className={style.headerLiLeft}
                key={index}
                onClick={(e) => {
                  setValue(mode)
                  setActive(!active)
                  const main = document.querySelector('main') || undefined
                  if (main !== undefined) {
                    main.style.filter = 'none'
                  }
                }}
              >
                <span>{theme[mode as keyof typeof theme]}</span>
                {mode}
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
