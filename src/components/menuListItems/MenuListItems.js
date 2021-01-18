import React, { Component } from 'react'

import './MenuListItems.scss'
import MenuItem from '../menuItem/MenuItem'
import { sections } from '../../data'


export default class MenuListItems extends Component {

  state = {
    menuItems: sections
  }

  render() {
    return (
      <div className='menu-list-items'>
        {this.state.menuItems.map(({title, id, imageUrl, size}) => (
          <MenuItem key={id} title={title} imgUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}
