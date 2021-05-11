import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Error = () => {
  return (
    <div>
      <Head>
        <title>404</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <main className='error-container'>
        <img src='/images/patrick.png' alt='404' />
        <div className='error-details'>
          <h1 className='error-title'>La vache!</h1>
          <p>This page doesn't exist.</p>
          <Link href='/'>
            <a className='link error-link'>home</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Error;
