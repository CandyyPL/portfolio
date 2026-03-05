export const SECTIONS = {
  PROJECTS: 'projects',
  ABOUT: 'about',
  CONTACT: 'contact',
};

export const projectsQuery = `{
  allProjects {
    id
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
