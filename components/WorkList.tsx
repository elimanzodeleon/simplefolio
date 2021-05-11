import React from 'react';
import { projects } from '../data';
import { IProject } from '../interfaces';

const WorkList = () => {
  return (
    <div>
      {projects.map(project => {
        return <Project key={project.id} {...project} />;
      })}
    </div>
  );
};

export const Project: React.FC<IProject> = ({
  id,
  name,
  url,
  codeUrl,
  description,
  tools,
}) => {
  return (
    <div className='project'>
      <div className='project-header'>
        <a
          href={url}
          className='link project-name'
          target='_blank'
          rel='noreferrer'
        >
          {name}
        </a>
        <a
          href={codeUrl}
          target='_blank'
          rel='noreferrer'
          className='link project-details-link'
        >
          code
        </a>
      </div>
      <p className='project-body'>{description}</p>
      <div className='project-footer'>
        {tools.map(tool => (
          <a
            key={tool.id}
            href={tool.url}
            className='link project-details-link'
            target='_blank'
            rel='noreferrer'
          >
            {tool.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default WorkList;
