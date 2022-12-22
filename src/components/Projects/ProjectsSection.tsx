import { FC, useState } from 'react'
import {
  Project,
  ProjectsList,
  ProjectsWrapper,
} from '@/components/Projects/ProjectsSection.styles'

type ITech = string

interface IProject {
  id: string
  projectName: string
  techList: ITech[]
  githubLink: string
}

type IProjectsList = IProject[]

const initialProjects: IProjectsList = [
  {
    id: 'p01',
    projectName: 'Simple React Project',
    techList: ['React', 'Node.js'],
    githubLink: 'https://github.com/CandyyPL',
  },
  {
    id: 'p02',
    projectName: 'Simple React Project v2',
    techList: ['React', 'Node.js'],
    githubLink: 'https://github.com/CandyyPL',
  },
  {
    id: 'p03',
    projectName: 'Simple React Project v3',
    techList: ['React', 'Node.js'],
    githubLink: 'https://github.com/CandyyPL',
  },
  {
    id: 'p04',
    projectName: 'Simple React Project v4',
    techList: ['React', 'Node.js'],
    githubLink: 'https://github.com/CandyyPL',
  },
  {
    id: 'p05',
    projectName: 'Simple React Project v5',
    techList: ['React', 'Node.js'],
    githubLink: 'https://github.com/CandyyPL',
  },
]

const ProjectsSection: FC = () => {
  const [projects, setProjects] = useState<IProjectsList>(initialProjects)

  return (
    <ProjectsWrapper>
      <ProjectsList>
        {projects.length > 0
          ? projects.map((p) => <Project key={p.id}>{p.projectName}</Project>)
          : null}
      </ProjectsList>
    </ProjectsWrapper>
  )
}

export default ProjectsSection
