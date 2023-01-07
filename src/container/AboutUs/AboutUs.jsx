import React from 'react';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='#about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src="./assets/G.png" alt="g letter" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>about us</h1>
        <img src="./assets/spoon.png" alt="about_spoon" className='spoon__umg' />
        <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veniam laudantium atque hic, incidunt obcaecati eius aliquid corrupti, officia, id doloribus doloremque cumque dicta tempore et facilis.</p>
        <button type='button' className='custom__button'>know more</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src="./assets/knife.png" alt="knif" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>our history</h1>
        <img src="./assets/spoon.png" alt="about_spoon" className='spoon__umg' />
        <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veniam laudantium atque hic, incidunt obcaecati eius aliquid corrupti, officia, id doloribus doloremque cumque dicta tempore et facilis.</p>
        <button type='button' className='custom__button'>know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
