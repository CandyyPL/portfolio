import HeroSection from '@/components/sections/Hero/HeroSection.jsx'
import Background from '@/components/Background/Background.jsx'
import Content from '@/components/Content/Content.jsx'
import Topbar from '@/components/Topbar/Topbar.jsx'
import ProjectsSection from '@/components/sections/Projects/ProjectsSection.jsx'
import AboutSection from '@/components/sections/About/AboutSection.jsx'
import ContactSection from '@/components/sections/Contact/ContactSection.jsx'
import Footer from '@/components/sections/Footer/Footer.jsx'
import { useContext, useEffect, useRef } from 'react'
import { ScrollContext } from '@/providers/ScrollProvider.jsx'

const App = () => {
  const { setProjectsRef, setAboutRef, setContactRef } = useContext(ScrollContext)

  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    setProjectsRef(projectsRef)
    setAboutRef(aboutRef)
    setContactRef(contactRef)
  }, [])

  return (
    <>
      <Background />
      <Topbar />
      <Content>
        <section className='sections'>
          <HeroSection contactRef={contactRef} />
          <ProjectsSection ref={projectsRef} />
          <AboutSection ref={aboutRef} />
          <ContactSection ref={contactRef} />
        </section>
      </Content>
      <Footer />
    </>
  )
}

export default App
