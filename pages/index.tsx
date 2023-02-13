import Head from 'next/head'
import Image from 'next/image'

import { Home, Project, Skill, Contact } from '../components'

export default function HomePage() {
  return (
    <>
      <Home />
      <Project />
      <Skill />
      <Contact />
    </>
  )
}
