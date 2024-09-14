import HeroSection from '@/components/sections/Hero/HeroSection.jsx'
import Background from '@/components/Background/Background.jsx'
import Content from '@/components/Content/Content.jsx'
import Topbar from '@/components/Topbar/Topbar.jsx'
import ProjectsSection from '@/components/sections/Projects/ProjectsSection.jsx'
import AboutSection from '@/components/sections/About/AboutSection.jsx'
import ContactSection from '@/components/sections/Contact/ContactSection.jsx'
import Footer from '@/components/sections/Footer/Footer.jsx'

const App = () => {
  return (
    <>
      <Background />
      <Content>
        <Topbar />
        <section className='sections'>
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </section>
      </Content>
      <Footer />
    </>
  )
}

export default App
