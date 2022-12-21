import { FC, useContext, useEffect, useRef } from 'react'
import { MainContentWrapper } from '@/components/MainContent/MainContent.styles'
import WelcomeSection from '@/components/Welcome/WelcomeSection'
import ProjectsSection from '@/components/Projects/ProjectsSection'
import { ContextValues, ScrollContext } from '@/providers/ScrollProvider'
import AboutSection from '@/components/About/AboutSection'
import ContactSection from '@/components/Contact/ContactSection'

const MainContent: FC = () => {
  const { setProjectsRef, setAboutRef, setContactRef } = useContext<ContextValues>(ScrollContext)

  const projectsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setProjectsRef(projectsRef)
    setAboutRef(aboutRef)
    setContactRef(contactRef)
  }, [])

  return (
    <MainContentWrapper>
      <div className='section-tags'>
        <span className='tag'>&lt;welcome&gt;</span>
        <WelcomeSection />
        <span className='tag'>&lt;/welcome&gt;</span>
      </div>
      <div className='section-tags' ref={projectsRef}>
        <span className='tag'>&lt;projects&gt;</span>
        <ProjectsSection />
        <span className='tag'>&lt;/projects&gt;</span>
      </div>
      <div className='section-tags' ref={aboutRef}>
        <span className='tag'>&lt;about&gt;</span>
        <AboutSection />
        <span className='tag'>&lt;/about&gt;</span>
      </div>
      <div className='section-tags' ref={contactRef}>
        <span className='tag'>&lt;contact&gt;</span>
        <ContactSection />
        <span className='tag'>&lt;/contact&gt;</span>
      </div>
    </MainContentWrapper>
  )
}

export default MainContent
