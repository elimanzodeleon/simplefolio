import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { projects } from '../../data';

const Work = () => {
  return (
    <div className='container'>
      <Head>
        <title>Work</title>
        <link rel='icon' href='/favicon.ico' />
        {/* <link rel='stylesheet' href='/styles.css' /> */}
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Navbar />
      <main className='work-container'>
        <h1 className='work-title'>Projects I've Built</h1>
        <div>
          {projects.map((project) => {
            const { id, name, url, codeUrl, description } = project;
            return (
              <div key={id} className='project'>
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
                  <a
                    href='https://reactjs.org/'
                    className='link project-details-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    React
                  </a>
                  <a
                    href='https://firebase.google.com/'
                    className='link project-details-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Firebase
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
