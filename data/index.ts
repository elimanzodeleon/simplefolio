import { Link, IProject } from '../interfaces';

export const socialLinks: Link[] = [
  {
    id: 2,
    name: 'resume',
    url: '/resume.pdf',
    icon: '/icons/resume.svg',
  },
  {
    id: 0,
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/elimanzodeleon/',
    icon: '/icons/linkedin.svg',
  },
  {
    id: 1,
    name: 'github',
    url: 'https://github.com/elimanzodeleon',
    icon: '/icons/github.svg',
  },
];

export const bio: string[] = [
  "I'm a software engineer based in Los Angeles, CA.",
];

export const projects: IProject[] = [
  {
    id: 0,
    name: 'Tech Stories',
    url: 'https://gifted-carson-b1e491.netlify.app/',
    codeUrl: 'https://github.com/elimanzodeleon/tech-stories',
    description:
      'Tech stories is a full stack web application that allows users to read the most popular stories from Hacker News. Users can search for stories, navigate through their search history, sort their search results, and most importantly, save their favorite stories. ',
    tools: [
      { id: 0, name: 'React', url: 'https://reactjs.org/' },
      { id: 1, name: 'Firebase', url: 'https://firebase.google.com/' },
    ],
  },
];
