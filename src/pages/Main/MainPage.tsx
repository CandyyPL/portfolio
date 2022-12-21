import { FC, SyntheticEvent } from 'react'
import { MainPageWraper, TopBar, TopBarMenu } from '@/pages/Main/MainPage.styles'
import logoImg from '@/assets/lollipop.png'
import MainContent from '@/components/MainContent/MainContent'
import Footer from '@/components/Footer/Footer'

const MainPage: FC = () => {
  const handleScrollView = (e: SyntheticEvent<HTMLLIElement>) => {
    const section = e.currentTarget.dataset.section

    switch (section) {
      case '0':
        window.scrollTo({ top: 0, behavior: 'smooth' })
        break
      case '1':
        window.scrollTo({ top: 500, behavior: 'smooth' })
        break
      case '2':
        window.scrollTo({ top: 0, behavior: 'smooth' })
        break
      case '3':
        window.scrollTo({ top: 0, behavior: 'smooth' })
        break
    }
  }

  return (
    <MainPageWraper>
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
