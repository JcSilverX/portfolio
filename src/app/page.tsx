import Image from 'next/image'
import styles from './page.module.css'
import Intro from '@/components/intro'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'


export default function Home() {
  return (
    <main className='main'>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
