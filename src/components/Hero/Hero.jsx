import React from 'react';
import '../../assets/styles/base.scss';
import Resume from '../../assets/files/Festus_Ebin.pdf';
import { Component } from 'react';


class Hero extends Component {
  state = {
    name: 'Festus Ebin',
    desc: 'I am a full stack developer focused on building beautiful interfaces & experiences based in Lagos, Nigeria'
  }

  render() {
    const { name, desc } = this.state;

    return (
      <section id="Hero">
        <div className='heroText active'>
          <p className='title'>Hi, <span>my name is</span></p>
          <p className='name'>{name}</p>
          <p className='desc'>{desc}</p>
          <a rel='noopener noreferrer' href={Resume} target='_blank'>Resume</a>
        </div>
      </section>
    );
  }
}

export default Hero;