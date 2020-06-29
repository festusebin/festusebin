import React from 'react';
import LinkedinImage from '../../assets/images/linkedin.png';
import GithubImage from '../../assets/images/facebook.png';
import TwitterImage from '../../assets/images/twitter.png';


const SocialIcons = () => (
  <div className='icons'>
    <ul className='social-icons-container'>
      <li><a rel='noopener noreferrer' href="https://www.linkedin.com/in/festuebin" target='_blank'><img src={LinkedinImage} alt="linkedin" /></a></li>
      <li><a rel='noopener noreferrer' href="https://github.com/festusebin" target='_blank'><img src={GithubImage} alt="github"/></a></li>
      <li><a rel='noopener noreferrer' href="https://twitter.com/festusebin" target='_blank'><img src={TwitterImage} alt="twiter"/></a></li>
    </ul>
  </div>
);

export default SocialIcons;