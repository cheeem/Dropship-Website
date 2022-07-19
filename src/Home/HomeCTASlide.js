import './HomeCTASlide.css';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeCTASlide = ({ header, img, path, caption }) => {
  return (
    <div className='CTA-slide'>
      <Link to={path}>
        <h1 className='CTA-slide-header'> {header} </h1>
        <div className='CTA-slide-display' style={{backgroundImage: `url(${img})`}}>
          <div className='CTA-slide-display-caption'> {caption} </div>
        </div>
      </Link>
    </div>
  )
}

export default HomeCTASlide;
