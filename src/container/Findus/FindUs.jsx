import React from 'react';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='#contact' >
    <div className='app__wrapper_info'>
      <SubHeading title='contact'/>
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>algeria, alger, bab-el-wed </p>
        <p className='p__cormorant' style={{color:"#DCCA87", margin:"2rem 0rem"}}>opening hours </p>
        <p className='p__opensans'>mon - fri: 10:00 am - 02:00</p>
        <p className='p__opensans'>sat - sun: 10:00 am - 02:00</p>
      </div>
      <button className='custom__button' style={{marginTop:'2rem'}}>visit us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src="./assets/findus.png" alt="" />
    </div>
  </div>
);

export default FindUs;
