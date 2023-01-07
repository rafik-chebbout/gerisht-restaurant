import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { FooterOverlay ,Newsletter} from '../../components';


import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>contact us</h1>
        <p className='p__opensans'>algeria, alger, bab-el-wed</p>
        <p className='p__opensans'>+213561529408</p>
        <p className='p__opensans'>+213540067751</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src="./assets/gericht.png" alt="gerisht logo"/>
        <p className='p__opensans'>"the best way to find yourself is to lose yourself in the service of others."</p>
        <img src="./assets/spoon.png" alt="spoon" style={{marginTop:"15px"}} />
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
          </div>
      </div>
      <div className='app__footer-links_works'style={{textAlign:"center"}}>
      <h1 className='app__footer-headtext'>working hours</h1>
      <div>
        <p className='p__opensans'>monday - friday</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>saturday - sunday</p>
        <p className='p__opensans'>07:00 am - 11:00 am</p>
      </div>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Gericht, all right reserved.</p>
    </div>
  </div>
);

export default Footer;
