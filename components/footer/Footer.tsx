import Link from 'next/link'
import style from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <Link
          href={'https://www.linkedin.com/in/edras-monterroso-2b0982245'}
          target="_blank"
          className={style.footerLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 -2 44 44"
          >
            <path
              fill="#007EBB"
              fill-rule="evenodd"
              d="M44 40h-9.7246V25.9384c0-3.680604-1.521167-6.19325-4.866181-6.19325-2.55856 0-3.98142 1.695588-4.643697 3.329704-.248354.586541-.209548 1.403599-.209548 2.220657V40h-9.634055s.124177-24.908753 0-27.172953h9.634055v4.264584c.569144-1.864635 3.647695-4.525837 8.560442-4.525837C39.21143 12.565794 44 16.474355 44 24.890824V40ZM5.17921 9.428187h-.062089C2.0127 9.428187 0 7.350964 0 4.717936 0 2.033681 2.072201 0 5.238711 0c3.163923 0 5.10936 2.028559 5.171449 4.710252 0 2.633028-2.007526 4.717935-5.23095 4.717935Zm-4.069379 3.39886h8.575964V40H1.109831V12.827047Z"
            />
          </svg>
        </Link>
        <Link
          href={'https://github.com/EmonterrosoF'}
          target="_blank"
          className={style.footerLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.08.66-.23.66-.5v-1.69C6.73 19.91 6.14 18 6.14 18A2.69 2.69 0 0 0 5 16.5c-.91-.62.07-.6.07-.6a2.1 2.1 0 0 1 1.53 1 2.15 2.15 0 0 0 2.91.83 2.16 2.16 0 0 1 .63-1.34C8 16.17 5.62 15.31 5.62 11.5a3.87 3.87 0 0 1 1-2.71 3.58 3.58 0 0 1 .1-2.64s.84-.27 2.75 1a9.63 9.63 0 0 1 5 0c1.91-1.29 2.75-1 2.75-1a3.58 3.58 0 0 1 .1 2.64 3.87 3.87 0 0 1 1 2.71c0 3.82-2.34 4.66-4.57 4.91a2.39 2.39 0 0 1 .69 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 12 2Z" />
          </svg>
        </Link>
      </div>
      <span className={style.footerSpan}>Edras Monterroso</span>
    </footer>
  )
}

export default Footer
