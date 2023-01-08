import Link from 'next/link'
import { FormattedMessage } from 'react-intl'
import { nav } from '../../types/types'
import style from './header.module.scss'

const Navigation = ({
  navigation: { id, href, name, scroll },
}: {
  navigation: nav
}) => {
  return (
    <li className={style.headerLi}>
      <Link href={href} id={id} className="headerLink" scroll={scroll}>
        <FormattedMessage id={`header.nav.${name}`} />
      </Link>
    </li>
  )
}

export default Navigation
