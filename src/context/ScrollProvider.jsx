import { createContext, useState } from 'react'

export const ScrollContext = createContext({})

const ScrollProvider = ({ children }) => {
  const [projectsRef, setProjectsRef] = useState()
  const [aboutRef, setAboutRef] = useState()
  const [contactRef, setContactRef] = useState()

  const provide = {
    projectsRef,
    setProjectsRef,
    aboutRef,
    setAboutRef,
    contactRef,
    setContactRef,
  }

  return <ScrollContext.Provider value={provide}>{children}</ScrollContext.Provider>
}

export default ScrollProvider
