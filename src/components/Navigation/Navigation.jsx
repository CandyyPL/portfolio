import { useContext } from 'react'
import Style from './Navigation.styles.js'
import { ScrollContext } from '@/providers/ScrollProvider.jsx'
import Reveal from '@/components/Reveal/Reveal.jsx'
import useMediaQuery from '@/hooks/useMediaQuery.js'

const Navigation = ({ toggleNav }) => {
  const { projectsRef, aboutRef, contactRef } = useContext(ScrollContext)

  const isMobileWidth = useMediaQuery('width < 1280px')

  const handleScroll = (e) => {
    if (isMobileWidth) toggleNav()

    const section = e.currentTarget.dataset.section

    const options = { behaviour: 'smooth', block: 'start' }

    switch (section) {
      case '0':
        window.scrollTo({ top: 0 })
        break
      case '1':
        if (projectsRef != undefined) {
          projectsRef.current.scrollIntoView(options)
        }
        break
      case '2':
        if (aboutRef != undefined) {
          aboutRef.current.scrollIntoView(options)
        }
        break
      case '3':
        if (contactRef != undefined) {
          contactRef.current.scrollIntoView(options)
        }
        break
    }
  }

  return (
    <Style.NavWrapper>
      <Style.NavList>
        {/* <Reveal length={40} delay={1} mobile={false}>
          <Style.NavItem onClick={(e) => handleScroll(e)} data-section='0'>
            witaj
          </Style.NavItem>
        </Reveal> */}
        <Reveal length={40} delay={1} mobile={false}>
          <Style.NavItem onClick={(e) => handleScroll(e)} data-section='1'>
            projekty
          </Style.NavItem>
        </Reveal>
        <Reveal length={40} delay={1.1} mobile={false}>
          <Style.NavItem onClick={(e) => handleScroll(e)} data-section='2'>
            o mnie
          </Style.NavItem>
        </Reveal>
        <Reveal length={40} delay={1.2} mobile={false}>
          <Style.NavItem className='contact' onClick={(e) => handleScroll(e)} data-section='3'>
            kontakt
          </Style.NavItem>
        </Reveal>
      </Style.NavList>
    </Style.NavWrapper>
  )
}

export default Navigation
