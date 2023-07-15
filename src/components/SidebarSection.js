import React from 'react';
import '../App.css'; 
import { Button } from './Button'; 
import './SidebarSection.css'; 

function SidebarSection() {
  return (
    <section className="sidebar">
    <div className="content">
      <div className="left-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h1>LOREM IPSUM</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at maximus metus, eu dictum sapien. Integer aliquam mauris turpis, 
            vel accumsan diam vulputate eget. Sed sed tellus at tortor ultrices vulputate quis quis nibh. Aenean vitae dolor semper, 
            faucibus lorem at, ultricies sapien. </p>

        <div className='bar-btns'>
        <Button className = 'btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>VIEW MORE</Button>
      </div>
      </div>

      <div className = "right-pic">
      <img src={require('../img/laptop2.jpg')} className='img' />
      </div>

    </div>
  </section>
  )
}

export default SidebarSection
