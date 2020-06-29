import React from 'react';


const Navbar = () => {
  return (
    <header className='header'>
      <a href="#home" className='logo'>Festus<span>Ebin</span></a>
      <img src="" alt="" />
      <ul>
        <li><a href="#projects" className='active'><span>01.</span>Projects</a></li>
        <li><a href="#blog"><span>02.</span>Blog</a></li>
        <li><a href="#contact"><span>03.</span>Contact</a></li>
      </ul>
    </header>
  );
};


export default Navbar;