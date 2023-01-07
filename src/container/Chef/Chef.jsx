import React from 'react';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src="./assets/chef.png" alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="chef's word"/>
      <h1 className='headtext__cormorant'>what we belive in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src="./assets/quote.png" alt="quote" />
          <p className='p__opensans'>Lorem ipsum, dolor sit amet Corrupti autem voluptatem.</p>
        </div>
        <p className='p__opensans'>Fuga, laudantium. Corrupti autem voluptatem provident nihil distinctio cum eos deserunt aliquid a dolores voluptatibus, omnis error ratione, voluptatum quod!</p>
      </div>
      <dir className="app__chef-sign">
        <p>kevin luo</p>
        <p className='p__opensans'>chef & founder</p>
        <img src="./assets/sign.png" alt="sign" />
      </dir>
    </div>
  </div>
);

export default Chef;
