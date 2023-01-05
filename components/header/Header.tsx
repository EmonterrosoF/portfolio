import { useEffect, useRef, useState } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

import { FormattedMessage } from 'react-intl'
import { BsMoon, BsSun } from 'react-icons/bs'

import style from './header.module.scss'

import { SvgLogo } from '../Logo'
import { useTheme } from '../../hooks/useTheme'
import useOnClickOutside from '../../hooks/useOnClickOutside'

import { HiComputerDesktop, HiOutlineLanguage } from 'react-icons/hi2'
import { linkSync } from 'fs'

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

const navigation = [
  {
    name: 'home',
    href: '/#home',
    id: 'Home',
  },
  {
    name: 'projects',
    href: '/#projects',
    id: 'Projects',
  },
  {
    name: 'skills',
    href: '/#skills',
    id: 'Skills',
  },
  {
    name: 'contact',
    href: '/#contact',
    id: 'Contact',
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

  const path = useRef<HTMLAnchorElement>(null)
  const refOptions = useRef<HTMLUListElement>(null)
  const refButtonOptions = useRef<HTMLButtonElement>(null)

  const handleClickOutsideFn = () => {
    setActive(false)
  }
  useOnClickOutside(refOptions, handleClickOutsideFn, refButtonOptions)

  const { locales, locale, asPath } = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id')
          console.log(id)

          const link = navigation.find((nav) => nav.name === id)
          const selected = document.querySelector(`#${link?.id}`)
          console.log(entry)
          if (entry.isIntersecting) {
            selected?.classList.add('isActive')
          } else {
            selected?.classList.remove('isActive')
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    navigation.forEach(({ href }) => {
      const section = document.querySelector(href.replace('/', ''))

      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

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
      <Link href={'/'} className={style.headerLogo}>
        <SvgLogo />
      </Link>
      <nav className={style.headerNav}>
        <ul id="listOfNavigation" className={style.headerUl}>
          {navigation.map(({ name, href, id }) => (
            <li key={name}>
              <Link
                ref={path}
                href={href}
                // className={
                //   path === href
                //     ? `${style.headerLink} ${style.isActive}`
                //     : style.headerLink
                // }
                id={id}
                className={style.headerLink}

                // onClick={() => setPath(href)}
              >
                <FormattedMessage id={`header.nav.${name}`} />
              </Link>
            </li>
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
              <span>
                <HiOutlineLanguage />
              </span>
              {local}
            </Link>
          ))}
        </div>

        <button
          className={style.headerButtonTheme}
          ref={refButtonOptions}
          onClick={() => setActive(!active)}
        >
          {theme[value]}
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
                }}
              >
                <span>{theme[mode]}</span>
                {mode}
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
