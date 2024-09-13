import ProjectCard from '@/components/sections/Projects/ProjectCard/ProjectCard.jsx'
import Style from './ProjectsSection.style.js'

const projects = [
  {
    thumbnail: 'https://placehold.co/320x180',
    title: 'Witryna Lakiernii Proszkowej DUST',
    desc: 'Był to mój pierwszy komercyjny projekt. Lakiernia DUST to firma specjalizująca się w usługach z zakresu malowania proszkowego oraz obróbki strumieniowo-ściernej.',
    techs: ['js', 'react', 'sass'],
  },
]

const ProjectsSection = () => {
  return (
    <Style.ProjectsWrapper>
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
    </Style.ProjectsWrapper>
  )
}

export default ProjectsSection
