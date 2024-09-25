import Navigation from '@/components/Navigation/Navigation.jsx'
import { useRef, useState } from 'react'
import Style from './Topbar.styles.js'

const Topbar = () => {
  const navRef = useRef(null)

  const [isHamburgerActive, setHamburgerActive] = useState(false)

  const toggleNavigation = () => {
    setHamburgerActive((prev) => !prev)
    navRef.current.classList.toggle('nav-active')
    document.body.classList.toggle('nav-active')
  }

  return (
    <Style.TopbarWrapper>
      <Style.NavBox ref={navRef}>
        <Navigation toggleNav={toggleNavigation} />
      </Style.NavBox>
      <Style.Mobile>
        <Style.Hamburger onClick={() => toggleNavigation()}>
          <Style.HamburgerInner>
            <Style.HamburgerLine isActive={isHamburgerActive}></Style.HamburgerLine>
          </Style.HamburgerInner>
        </Style.Hamburger>
      </Style.Mobile>
      <Style.Desktop></Style.Desktop>
    </Style.TopbarWrapper>
  )
}

export default Topbar
