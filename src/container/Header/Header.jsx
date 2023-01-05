import React from 'react';
import {SubHeading} from '../../components'

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>the key to fine Dinig</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>sit tellus loborrtis sed senectus vuvalus molestie. condimentum volutpat morbi facillis quan scelerisque sapien et, panetribus aliquam amet tellus</p>
      <button type='bytton' className='custom__button'>explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src="./assets/Welcome.png" alt="image food" />
    </div>
  </div>
);

export default Header;
