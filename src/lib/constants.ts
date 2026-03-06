export const SECTIONS = {
  PROJECTS: 'projects',
  ABOUT: 'about',
  CONTACT: 'contact',
};

export const projectsQuery = `{
  allProjects {
    id
    slug
    name
    description
    longdescription
    thumbnail {
      url
    }
    techlist {
      id
      techname
    }
    link {
      url
    }
    repo {
      url
    }
    _firstPublishedAt
  }
}`;
