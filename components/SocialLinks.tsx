import React from 'react';
import { socialLinks } from '../data';

const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((link) => {
        const { id, name, url, icon } = link;
        return (
          <a key={id} href={url} target='_blank' rel='noreferrer'>
            <img
              src={icon}
              alt={name}
              width='20px'
              height='20px'
              className='social-icon'
            />
          </a>
        );
      })}
    </>
  );
};

export default SocialLinks;
