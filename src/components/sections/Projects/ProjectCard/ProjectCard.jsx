import Style from './ProjectCard.styles.js'
import IconList from '@/helpers/icons.js'

const ProjectCard = ({ projectDetails }) => {
  const { thumbnail, title, desc, techs } = projectDetails

  return (
    <Style.CardWrapper>
      <Style.Image>
        <img className='project-thumbnail' src={thumbnail} alt='Miniaturka' />
      </Style.Image>
      <Style.ProjectDetails>
        <Style.ProjectDesc>
          <Style.Header>
            <h1 className='project-title'>{title}</h1>
          </Style.Header>
          <Style.Summary>{desc}</Style.Summary>
        </Style.ProjectDesc>
        <Style.Techs>
          {techs.map((t) => {
            const Icon = IconList.find((icon) => icon.name === t).icon
            return <Icon className='icon' key={t} />
          })}
        </Style.Techs>
      </Style.ProjectDetails>
    </Style.CardWrapper>
  )
}

export default ProjectCard
