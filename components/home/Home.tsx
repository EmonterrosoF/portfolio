import Link from 'next/link'

import style from './home.module.scss'

export const Home = () => {
  return (
    <section id="home" className={style.section}>
      <div className={style.sectionLeft}>
        <p className={style.sectionP}>EDRAS MONTERROSO</p>
        <h1 className={style.sectionH1}>Soy Web Development</h1>
        <div className={style.sectionDiv}>
          <Link href="#">Descargar CV</Link>
          <Link href="#">Contacto</Link>
        </div>
      </div>
      <div className={style.sectinRight}>right</div>
    </section>
  )
}
