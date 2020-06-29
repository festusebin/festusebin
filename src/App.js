import React, { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SocialIcons from './components/SocialIcons/SocialIcons';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Sidebar from './components/Sidebar/Sidebar'


const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Portfolio />
      <Contact />
      <SocialIcons />
      <Sidebar />
    </Fragment>
  );
}

export default App;
