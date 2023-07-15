import React from 'react';
import '../App.css'; 
import { Button } from './Button'; 
import './HeroSection.css'; 

function HeroSection() {
  return (
    <section className="hero">
    <div className="about">
    <img src={require('../img/laptop.jpg')} className='pic' />
    <div className="text">
        <h1>Creative Solutions</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at maximus metus, eu dictum sapien. Integer aliquam mauris turpis, 
            vel accumsan diam vulputate eget. Sed sed tellus at tortor ultrices vulputate quis quis nibh. Aenean vitae dolor semper, 
            faucibus lorem at, ultricies sapien. </p>
      </div>
    </div>
  </section>
  )
}

export default HeroSection; 
