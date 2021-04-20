import React from 'react';
import Link from 'next/link';
import SocialLinks from '../components/SocialLinks';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar-container'>
      <div className='links'>
        <Link href='/'>
          <a className='link'>home</a>
        </Link>
        <Link href='/work'>
          <a className='link'>work</a>
        </Link>
      </div>
      <div className='links social-links-nav'>
        <SocialLinks />
      </div>
    </nav>
  );
};

export default Navbar;
