import { useEffect, useState } from 'react'

import { nav } from '../types/types'

export const useObserver = (nav: nav[]) => {
  const [navigation, setNavigation] = useState(nav)

  useEffect(() => {
    console.log('navigation')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id')

          const link = navigation.find((nav) => nav.name === id)

          const selected = document.querySelector(`#${link?.id}`)

          if (entry.isIntersecting) {
            selected?.classList.add('isActive')
          } else {
            selected?.classList.remove('isActive')
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    navigation?.forEach(({ href }: { href: nav['href'] }) => {
      let section = null
      if (href?.replace('/', '') === '#home') {
        section = document.querySelector('#principal')
      } else {
        section = document.querySelector(href?.replace('/', ''))
      }

      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [navigation])
}
