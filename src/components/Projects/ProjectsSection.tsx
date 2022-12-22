import { FC, useEffect, useState } from 'react'
import {
  Project,
  ProjectsList,
  ProjectsWrapper,
} from '@/components/Projects/ProjectsSection.styles'
import { useQuery } from 'graphql-hooks'

interface IThumb {
  url: string
}

interface ITech {
  id: string
  techname: string
}

interface ILink {
  linkurl: string
}

interface IProject {
  id: string
  projectname: string
  projectthumbnail: IThumb
  techlist: ITech[]
  githublink: ILink
}

type IProjectsList = IProject[]

const initialProjects: IProjectsList = []

const PROJECTS_QUERY = `
  query ProjectsQuery {
    allProjects {
      id
      projectname
      projectthumbnail {
        url
      }
      techlist {
        id
        techname
      }
      githublink {
        linkurl
      }
    }
  }
`

const ProjectsSection: FC = () => {
  const [projects, setProjects] = useState<IProjectsList>(initialProjects)

  const { loading, data } = useQuery(PROJECTS_QUERY)

  useEffect(() => {
    if (data != undefined) {
      setProjects(data.allProjects)
    }
  }, [data])

  return (
    <ProjectsWrapper>
      {loading ? (
        <div className='loading'>
          <div className='lds-ellipsis'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <ProjectsList>
          {projects.length > 0 ? (
            projects.map((p) => (
              <a href={p.githublink.linkurl} key={p.id}>
                <Project>
                  <div className='title'>{p.projectname}</div>
                  <div className='thumb'>
                    <img src={p.projectthumbnail.url} alt='thumbnail' />
                  </div>
                  <div className='techs'>
                    {p.techlist.length > 0
                      ? p.techlist.map((t) => <span key={t.id}>{t.techname}</span>)
                      : null}
                  </div>
                </Project>
              </a>
            ))
          ) : (
            <span className='nothing'>
              No projects here yet. Check out my <a href='https://github.com/CandyyPL'>GitHub</a>.
            </span>
          )}
        </ProjectsList>
      )}
    </ProjectsWrapper>
  )
}

export default ProjectsSection
