import React from 'react';

const SubHeading = ({title}) => (
  <div style={{marginBottom:'1rem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src="./assets/spoon.png" alt="spoon" />
  </div>
);

export default SubHeading;
