import HeroSection from '@/components/sections/Hero/HeroSection.jsx'
import Background from '@/components/Background/Background.jsx'
import Content from '@/components/Content/Content.jsx'
import Topbar from '@/components/Topbar/Topbar.jsx'
import ProjectsSection from '@/components/sections/Projects/ProjectsSection.jsx'
import AboutSection from '@/components/sections/About/AboutSection.jsx'
import ContactSection from '@/components/sections/Contact/ContactSection.jsx'
import Footer from '@/components/sections/Footer/Footer.jsx'
import { useRef } from 'react'

const App = () => {
  const contactRef = useRef(null)

  return (
    <>
      <Background />
      {/* <Topbar /> */}
      <Content>
        <section className='sections'>
          <HeroSection contactRef={contactRef} />
          <ProjectsSection />
          <AboutSection />
          <ContactSection ref={contactRef} />
        </section>
      </Content>
      <Footer />
    </>
  )
}

export default App
