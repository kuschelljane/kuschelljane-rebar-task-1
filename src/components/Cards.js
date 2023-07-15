import React from 'react';
import '../App.css'; 
import './Cards.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faCode, faCropSimple, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

function Cards() {
  return (
    <div className="cards">
      <div className="title">
            <div className="row">
                <div className="column">
                    <FontAwesomeIcon icon= {faMessage} className='icons' />
                    <h3>Consulting</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at maximus metus, eu dictum sapien. Integer aliquam mauris turpis, 
                    vel accumsan diam vulputate eget.  </p>
                </div>
                <div className="column">
                    <FontAwesomeIcon icon= {faCode} className='icons' />
                    <h3>Developing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at maximus metus, eu dictum sapien. Integer aliquam mauris turpis, 
                    vel accumsan diam vulputate eget.  </p>
                </div>
                <div className="column">
                    <FontAwesomeIcon icon= {faCropSimple} className='icons' />
                    <h3>Designing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at maximus metus, eu dictum sapien. Integer aliquam mauris turpis, 
                    vel accumsan diam vulputate eget. </p>
                </div>
                <div className="column">
                    <FontAwesomeIcon icon= {faArrowTrendUp} className='icons' />
                    <h3>Analysis</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at maximus metus, eu dictum sapien. Integer aliquam mauris turpis, 
                    vel accumsan diam vulputate eget.  </p>
                </div>
              </div>
      </div>
      </div>
  )
}

export default Cards


