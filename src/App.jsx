import HeroSection from '@/components/sections/Hero/HeroSection.jsx'
import Background from '@/components/Background/Background.jsx'
import Content from '@/components/Content/Content.jsx'
import Topbar from '@/components/Topbar/Topbar.jsx'

const App = () => {
  return (
    <>
      <Background />
      <Content>
        <Topbar />
        <HeroSection />
      </Content>
    </>
  )
}

export default App
