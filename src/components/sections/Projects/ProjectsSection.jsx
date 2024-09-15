import ProjectCard from '@/components/sections/Projects/ProjectCard/ProjectCard.jsx'
import Style from './ProjectsSection.style.js'
import React from 'react'
import githubIcon from '@/assets/icons/github-mark.png'

const projects = [
  {
    thumbnail: 'https://placehold.co/320x180',
    title: 'Witryna Lakiernii Proszkowej DUST',
    desc: 'Był to mój pierwszy komercyjny projekt. Lakiernia DUST to firma specjalizująca się w usługach z zakresu malowania proszkowego oraz obróbki strumieniowo-ściernej.',
    techs: ['js', 'react', 'sass'],
  },
]

const ProjectsSection = React.forwardRef((_, ref) => {
  return (
    <Style.ProjectsWrapper ref={ref}>
      <h1 className='projects-header'>
        A oto kilka moich <span className='text-accent'>projektów</span>..
      </h1>
      <Style.CarouselIndicator>
        <div className='carousel-indicator-dot'></div>
        <div className='carousel-indicator-dot'></div>
        <div className='carousel-indicator-dot'></div>
      </Style.CarouselIndicator>
      <Style.Carousel>
        <ProjectCard projectDetails={projects[0]} />
      </Style.Carousel>
      <Style.GithubLink href='https://github.com/CandyyPL' target='_blank'>
        <img className='github-icon' src={githubIcon} alt='github' />
        Zobacz więcej
      </Style.GithubLink>
    </Style.ProjectsWrapper>
  )
})

export default ProjectsSection
