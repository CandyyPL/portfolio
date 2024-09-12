import Navigation from '@/components/Navigation/Navigation.jsx'
import { useRef } from 'react'
import './Topbar.styles.scss'

const Topbar = () => {
  const navRef = useRef(null)
  const hamburgerRef = useRef(null)

  const toggleNavigation = () => {
    navRef.current.classList.toggle('nav-active')
    hamburgerRef.current.classList.toggle('hamburger-active')
    document.body.classList.toggle('nav-active')
  }

  return (
    <section className='topbar-wrapper'>
      <aside className='nav-box' ref={navRef}>
        <Navigation />
      </aside>
      <div className='mobile'>
        <button className='hamburger' ref={hamburgerRef} onClick={() => toggleNavigation()}>
          <span className='hamburger-inner'>
            <span className='hamburger-line'></span>
          </span>
        </button>
      </div>
      <div className='desktop'></div>
    </section>
  )
}

export default Topbar
