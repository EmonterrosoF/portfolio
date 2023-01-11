import Link from 'next/link'
import { FormattedMessage } from 'react-intl'
import { nav } from '../../types/types'
import style from './header.module.scss'

const Navigation = ({
  navigation: { id, href, name, scroll, icon },
}: {
  navigation: nav
}) => {
  return (
    <li className={style.headerLi}>
      <Link href={href} id={id} className="Link" scroll={scroll}>
        <span className={style.letter}>
          <FormattedMessage id={`header.nav.${name}`} />
        </span>
        {icon}
      </Link>
    </li>
  )
}

export default Navigation
