import ProjectCard from '@/components/sections/Projects/ProjectCard/ProjectCard.jsx'
import Style from './ProjectsSection.style.js'
import githubIcon from '@/assets/icons/github-mark.png'
import { useQuery } from 'graphql-hooks'
import React, { useEffect, useState } from 'react'
import Reveal from '@/components/Reveal/Reveal.jsx'

const QUERY = `
  query Projects {
    allProjects {
      id
      projectthumbnail {
        url
      }
      projectname
      projectdesc
      techlist {
        techname
      }
      link {
        linkurl
      }
    }

    _allProjectsMeta {
      count
    }
  }
`

const ProjectsSection = React.forwardRef((_, ref) => {
  const { loading, error, data } = useQuery(QUERY)

  const [projects, setProjects] = useState([])

  useEffect(() => {
    if (data) {
      setProjects(data.allProjects)
    }
  }, [data])

  return (
    <Style.ProjectsWrapper ref={ref}>
      <h1 className='projects-header'>
        A oto kilka moich <span className='text-accent'>projektów</span>..
      </h1>
      {/* <Style.CarouselIndicator>
        <div className='carousel-indicator-dot'></div>
        <div className='carousel-indicator-dot'></div>
        <div className='carousel-indicator-dot'></div>
      </Style.CarouselIndicator> */}
      <Style.Carousel>
        {projects.length > 0 &&
          projects.map((p, i) => (
            <Reveal length={40} delay={0.5 + i * 0.15} key={p.id}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        {loading && (
          <span className='projects-loading-status'>
            <div className='loader'></div>
          </span>
        )}
        {error && (
          <span className='projects-loading-status'>
            <span className='error'>Wystąpił błąd. Spróbuj ponownie później.</span>
          </span>
        )}
      </Style.Carousel>
      <Style.GithubLink href='https://github.com/CandyyPL' target='_blank'>
        <img className='github-icon' src={githubIcon} alt='github' />
        Zobacz więcej
      </Style.GithubLink>
    </Style.ProjectsWrapper>
  )
})

export default ProjectsSection
