import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import {images , data} from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      < SubHeading title="menu that fits your palatte"/>
      <h1 className='headtext__cormorant'>today's special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>wine & beer</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wine, index) =>(
            <MenuItem key={wine.title + index} price={wine.price} title={wine.title} tags={wine.tags}/>
          ))}
        </div>
      </div>

      <div className='app__specialMenu_menu-img'>
        <img src="./assets/menu.png" alt="menu-img" />
      </div>
      
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>cocktail</p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index) =>(
            <MenuItem key={cocktail.title + index} price={cocktail.price}  title={cocktail.title} tags={cocktail.tags}/>
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop:'15px'}}>
      <button type='button' className='custom__button'>view more</button>
    </div>
  </div>
);

export default SpecialMenu;
