import React, { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SocialIcons from './components/SocialIcons/SocialIcons';
import Portfolio from './components/Portfolio/Portfolio';
//import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Sidebar from './components/Sidebar/Sidebar'
//import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Portfolio />
      {/* <Blog /> */}
      <Contact />
      <SocialIcons />
      <Sidebar />
      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;
