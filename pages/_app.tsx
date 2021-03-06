import React from 'react';
import '../styles/styles.css';

interface Props {
  Component: React.FC;
  pageProps: any;
}

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
