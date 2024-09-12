import ProjectCard from '@/components/sections/Projects/ProjectCard/ProjectCard.jsx'
import './ProjectsSection.styles.scss'

const ProjectsSection = () => {
  return (
    <section className='projects-wrapper'>
      <h1>
        A oto kilka moich <span className='text-accent'>projektów</span>..
      </h1>
      <div className='carousel-indicator'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <section className='carousel'>
        <ProjectCard />
      </section>
    </section>
  )
}

export default ProjectsSection
