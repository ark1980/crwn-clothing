import React from 'react';
import './Homepage.scss'

import MenuListItems from '../menuListItems/MenuListItems'

const Homepage = () => {
  return (
    <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
      <MenuListItems />
    </div>
  )
}

export default Homepage;