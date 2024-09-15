import { useContext } from 'react'
import Style from './Navigation.styles.js'
import { ScrollContext } from '@/providers/ScrollProvider.jsx'

const Navigation = () => {
  const { projectsRef, aboutRef, contactRef } = useContext(ScrollContext)

  const handleScroll = (e) => {
    const section = e.currentTarget.dataset.section

    const options = { behaviour: 'smooth', block: 'center' }

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
        <Style.NavItem onClick={(e) => handleScroll(e)} data-section='0'>
          witaj
        </Style.NavItem>
        <Style.NavItem onClick={(e) => handleScroll(e)} data-section='1'>
          projekty
        </Style.NavItem>
        <Style.NavItem onClick={(e) => handleScroll(e)} data-section='2'>
          o mnie
        </Style.NavItem>
        <Style.NavItem className='contact' onClick={(e) => handleScroll(e)} data-section='3'>
          kontakt
        </Style.NavItem>
      </Style.NavList>
    </Style.NavWrapper>
  )
}

export default Navigation
