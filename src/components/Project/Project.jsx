import React from 'react';


const Project = ({ name, imageSrc, desc, repository, liveVersion, status }) => (
  <div className='project'>
    <div className='projectText'>
      <p className='title'>{name}</p>
      <p className='desc'>{desc} <span>{status}</span></p>
      <div className='project-links'>
        <a rel='noopener noreferrer' href={liveVersion} target='_blank' className='live'><i class='fa fa-globe'></i><p>Live Demo</p></a>
        <a rel='noopener noreferrer' href={repository} target='_blank' className='git'><i class='fa fa-github'><p>View Source</p></i></a>
      </div>
    </div>
    <div className='projectImage'><img src={imageSrc} alt={name} /></div>
  </div>

);

export default Project;