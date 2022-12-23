import React, { createContext, FC, useState, Dispatch, SetStateAction } from 'react'

interface Props {
  children: JSX.Element[]
}

export interface ContextValues {
  welcomeRef: React.RefObject<HTMLDivElement> | undefined
  projectsRef: React.RefObject<HTMLDivElement> | undefined
  aboutRef: React.RefObject<HTMLDivElement> | undefined
  contactRef: React.RefObject<HTMLDivElement> | undefined
  setWelcomeRef: Dispatch<React.RefObject<HTMLDivElement>>
  setProjectsRef: Dispatch<React.RefObject<HTMLDivElement>>
  setAboutRef: Dispatch<React.RefObject<HTMLDivElement>>
  setContactRef: Dispatch<React.RefObject<HTMLDivElement>>
}

export const ScrollContext = createContext<ContextValues>({
  welcomeRef: undefined,
  projectsRef: undefined,
  aboutRef: undefined,
  contactRef: undefined,
  setWelcomeRef: (value: React.RefObject<HTMLDivElement>) => {},
  setProjectsRef: (value: React.RefObject<HTMLDivElement>) => {},
  setAboutRef: (value: React.RefObject<HTMLDivElement>) => {},
  setContactRef: (value: React.RefObject<HTMLDivElement>) => {},
})

const ScrollProvider: FC<Props> = ({ children }) => {
  const [welcomeRef, setWelcomeRef] = useState<React.RefObject<HTMLDivElement>>()
  const [projectsRef, setProjectsRef] = useState<React.RefObject<HTMLDivElement>>()
  const [aboutRef, setAboutRef] = useState<React.RefObject<HTMLDivElement>>()
  const [contactRef, setContactRef] = useState<React.RefObject<HTMLDivElement>>()

  const provide: ContextValues = {
    welcomeRef,
    setWelcomeRef,
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
