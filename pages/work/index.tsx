import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WorkList from '../../components/WorkList';

const Work = () => {
  return (
    <div className='container'>
      <Head>
        <title>Work</title>
        <link rel='icon' href='/favicon.ico' />
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
          <WorkList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
