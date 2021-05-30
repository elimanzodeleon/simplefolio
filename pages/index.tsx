import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Typed from 'react-typed';
import { bio } from '../data';

const Home = () => {
  return (
    <div className='container'>
      <Head>
        <title>Home</title>
        <meta
          name='description'
          content="I'm a full-stack software engineer based in Los Angeles, CA."
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Navbar />
      <main className='home-container'>
        <div className='jumbotron'>
          <h1 className='home-title'>
            hi, i'm <span className='name'>eli</span>.
          </h1>
          <Typed strings={bio} typeSpeed={40} className='info' />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
