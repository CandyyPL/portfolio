import { FC, SyntheticEvent, useContext } from 'react'
import { MainPageWraper, TopBar, TopBarMenu } from '@/pages/Main/MainPage.styles'
import logoImg from '@/assets/lollipop.png'
import MainContent from '@/components/MainContent/MainContent'
import Footer from '@/components/Footer/Footer'
import { ContextValues, ScrollContext } from '@/providers/ScrollProvider'
import Intro from '@/components/Intro/Intro'

const MainPage: FC = () => {
  const { projectsRef, aboutRef, contactRef } = useContext<ContextValues>(ScrollContext)

  const handleScrollView = (e: SyntheticEvent<HTMLLIElement>) => {
    const section = e.currentTarget.dataset.section

    switch (section) {
      case '0':
        window.scrollTo({ top: 0 })
        break
      case '1':
        if (projectsRef != undefined) {
          projectsRef.current?.scrollIntoView({ block: 'center' })
        }
        break
      case '2':
        if (aboutRef != undefined) {
          aboutRef.current?.scrollIntoView({ block: 'center' })
        }
        break
      case '3':
        if (contactRef != undefined) {
          contactRef.current?.scrollIntoView({ block: 'center' })
        }
        break
    }
  }

  return (
    <MainPageWraper>
      {/* <Intro /> */}
      <TopBar>
        <img src={logoImg} alt='logo' />
        <>
          <TopBarMenu>
            <li onClick={handleScrollView} data-section='0'>
              welcome
            </li>
            <li onClick={handleScrollView} data-section='1'>
              projects
            </li>
            <li onClick={handleScrollView} data-section='2'>
              about
            </li>
            <li className='contact' onClick={handleScrollView} data-section='3'>
              contact
            </li>
          </TopBarMenu>
        </>
      </TopBar>
      <MainContent />
      <Footer />
    </MainPageWraper>
  )
}

export default MainPage
