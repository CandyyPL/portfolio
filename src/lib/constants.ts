export const SECTIONS = {
  PROJECTS: 'projects',
  ABOUT: 'about',
  CONTACT: 'contact',
};

export const projectsQuery = `{
  allProjects {
    id
    projectslug
    projectname
    projectdesc
    projectthumbnail {
      url
    }
    techlist {
      id
      techname
    }
    _firstPublishedAt
  }
}`;
