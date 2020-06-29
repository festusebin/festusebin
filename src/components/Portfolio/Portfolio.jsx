import React, { Component } from 'react';
import Project from '../Project/Project';
import MedicareImage from '../../assets/images/coding-on-laptop.jpg';
import Facebookimage from '../../assets/images/background.jpg';
// eslint-disable-next-line no-unused-vars
import { render } from '@testing-library/react';


class Portfolio extends Component {
  constructor() {
    super();

    this.state = {
      projects: [
        {
          name: 'Medicare Dashboard',
          imageSrc: MedicareImage,
          desc: 'Medicare is a minimal core hospital management dashboard application that improves medical operations & logistics. This app is meant to support admin, where users can signup and get medical prescriptions & status report about their health, but must visit nearby health centres for further inquiry.',
          repository: 'https://github.com/festusebin/medicare-dashboard',
          liveVersion: 'https://univelcity12345.netlify.com',
          status: '(In Development)'
        },
        {
          name: 'my Fakebook',
          imageSrc: Facebookimage,
          desc: 'A basic social media application mimicking some of the functionalities of facebook.com & twitter.com, built as a personal project.',
          repository: 'https://github.com/fakebook',
          liveVersion: 'https://',
          status: '(In Development)'
        }
      ]
    };
  }
  


  render() {
    const myProjects = this.state.projects.map(
      ({ name, imageSrc, desc, repository, liveVersion, status }) => (
        <Project
          name={name}
          key={name}
          imageSrc={imageSrc}
          desc={desc}
          repository={repository}
          liveVersion={liveVersion}
          status={status}
        />
      )
    );
  
    return (
      <section id='portfolio'>
        <h1><span>01.</span>Projects</h1>
  
        <div className='projects'>{myProjects}</div>
        
      </section>
    )
  }
}


export default Portfolio;