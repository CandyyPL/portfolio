import Style from './ProjectCard.styles.js'
import IconList from '@/helpers/icons.js'

const ProjectCard = ({ project }) => {
  return (
    <Style.CardWrapper href={project.link.linkurl} target='_blank'>
      <Style.Image>
        <img className='project-thumbnail' src={project.projectthumbnail.url} alt='Miniaturka' />
      </Style.Image>
      <Style.ProjectDetails>
        <Style.ProjectDesc>
          <Style.Header>
            <h1 className='project-title'>{project.projectname}</h1>
          </Style.Header>
          <Style.Summary>{project.projectdesc}</Style.Summary>
        </Style.ProjectDesc>
        <Style.Techs>
          {project.techlist.map(({ techname }) => {
            const Icon = IconList.find((icon) => icon.name === techname).icon
            return <Icon className='icon' key={techname} />
          })}
        </Style.Techs>
      </Style.ProjectDetails>
    </Style.CardWrapper>
  )
}

export default ProjectCard
