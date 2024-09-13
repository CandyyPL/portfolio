import HeroSection from '@/components/sections/Hero/HeroSection.jsx'
import Background from '@/components/Background/Background.jsx'
import Content from '@/components/Content/Content.jsx'
import Topbar from '@/components/Topbar/Topbar.jsx'
import ProjectsSection from '@/components/sections/Projects/ProjectsSection.jsx'
import AboutSection from '@/components/sections/About/AboutSection.jsx'

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
        </section>
      </Content>
    </>
  )
}

export default App
