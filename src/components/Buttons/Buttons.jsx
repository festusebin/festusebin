import React from 'react';
import LeftArrow from '../../assets/images/left-chevron.svg';
import RighArrow from '../../assets/images/chevron.svg';

const Buttons = () => (
  <div className='buttons'>
    <ul className='buttons-container'>
      <li><a href=""><img src={LeftArrow} alt="left-arrow" /></a></li>
      <li><a href=""><img src={RighArrow} alt="right-arrow"/></a></li>
    </ul>
  </div>
);



export default Buttons;