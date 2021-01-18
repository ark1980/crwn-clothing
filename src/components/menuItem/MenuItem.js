import React from 'react'

import './MenuItem.scss'

export default function MenuItem({ title, imgUrl, size }) {
  return (
    <div className={`${size} menu-item`}>
    <div 
      className='background-image'
      style={{backgroundImage: `url(${imgUrl})` }} />
        <div className='content'>
          <div className='title'>{title.toUpperCase()}</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
  )
}
