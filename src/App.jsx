import HeroSection from '@/components/sections/Hero/HeroSection.jsx'
import Background from '@/components/Background/Background.jsx'
import Content from '@/components/Content/Content.jsx'
import Topbar from '@/components/Topbar/Topbar.jsx'
import ProjectsSection from '@/components/sections/Projects/ProjectsSection.jsx'

const App = () => {
  return (
    <>
      <Background />
      <Content>
        <Topbar />
        <section className='sections'>
          <HeroSection />
          <ProjectsSection />
        </section>
      </Content>
    </>
  )
}

export default App
