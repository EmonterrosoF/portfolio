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
    name: 'home',
    href: '/#home',
    id: 'Home',
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
      <Link href={'/#hme'} className={style.headerLogo} scroll={false}>
        <SvgLogo />
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
