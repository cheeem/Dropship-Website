import './Home.css'
import React from 'react';
import HomeCTASlide from './HomeCTASlide.js';

const CTASlides = [
  {header: 'Try White Shoes', img: './Home-img/shoe-white.png', path: '/products', caption: 'This is a caption'},
  {header: 'Try Red Shoes', img:'./Home-img/shoe-red.png', path: '/products', caption: 'This is a caption'},
  {header: 'Try Black Shoes', img: './Home-img/shoe-black.png', path: '/products', caption: 'This is a caption'},
];

const Home = () => {
  return (
    <div className='home'>
      <div className='home-header'> 
        <div className='home-header-img'> </div>
        <p className='home-header-caption'>
          The <span> New Wave </span> of Boost Insoles
        </p>
      </div>
      <article> 
        <div className='CTA-container'>
          <h1 className='CTA-header'>
            Explore with <span> Company Name </span>
          </h1>
          {CTASlides.map((slideData, index) => {
            return <HomeCTASlide
              key={index}
              header={slideData.header}
              img={slideData.img}
              path={slideData.path}
              caption={slideData.caption}
            />
          })}
        </div>
      </article>
    </div>
  )
}

export default Home;
