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
  "I'm a full stack software engineer based in Los Angeles, CA.",
];

export const projects: IProject[] = [
  {
    id: 2,
    name: 'Liftona',
    url: 'https://liftona.netlify.app/',
    codeUrl: 'https://github.com/elimanzodeleon/liftona-frontend',
    description:
      'Liftona is a web application that allows users to find and share workouts. Users can then find other users to follow, search for workouts and like workouts that have been posted. Each form has rigorous validation that helps prevent unnecessary requests from being made to the server. The front end was designed using a mobile-first approach with styled components. Flexbox was used as the main layoout model.',
    tools: [
      { id: 0, name: 'React', url: 'https://reactjs.org/' },
      { id: 1, name: 'Node', url: 'https://nodejs.org/en/' },
      { id: 2, name: 'Express', url: 'https://expressjs.com/' },
      { id: 3, name: 'MongoDB', url: 'https://www.mongodb.com/' },
      {
        id: 4,
        name: 'Styled Components',
        url: 'https://styled-components.com/',
      },
    ],
  },
  {
    id: 1,
    name: 'Next Shop',
    url: 'https://next-shop-bice.vercel.app/',
    codeUrl: 'https://github.com/elimanzodeleon/NextShop',
    description:
      'Next Shop is an E-commerce web app that allows users to purchase items listed by root users. Every page on this E-commerce site is rendered on the server. This allows users to experience faster performance by having increased time to interactive that is brought by server-side rendering. The backend is currently still in development.',
    tools: [
      { id: 0, name: 'Next', url: 'https://nextjs.org/' },
      { id: 1, name: 'Node', url: 'https://nodejs.org/en/' },
      { id: 2, name: 'MongoDB', url: 'https://www.mongodb.com/' },
      { id: 3, name: 'Stripe', url: 'https://stripe.com/' },
      { id: 4, name: 'Semantic UI', url: 'https://react.semantic-ui.com/' },
    ],
  },
  {
    id: 0,
    name: 'Tech Stories',
    url: 'https://gifted-carson-b1e491.netlify.app/',
    codeUrl: 'https://github.com/elimanzodeleon/tech-stories/',
    description:
      'Tech stories is a full stack web application that allows users to read the most popular stories from Hacker News. Users can search for stories, navigate through their search history, sort their search results, and most importantly, save their favorite stories. ',
    tools: [
      { id: 0, name: 'React', url: 'https://reactjs.org/' },
      { id: 1, name: 'Firebase', url: 'https://firebase.google.com/' },
    ],
  },
];
