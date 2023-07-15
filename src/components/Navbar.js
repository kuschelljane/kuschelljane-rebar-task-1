import React, {useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom'; 
import './Navbar.css'; 
import {Button} from './Button'; 

function Navbar() {
    const [click, setClick] = useState(false); 
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click); 
    const closeMobileMenu = () => setClick(false); 

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else {
            setButton(true); 
        }
    }; 

    useEffect (() => {
        showButton(); 
    }, []); 

    window.addEventListener('resize', showButton); 

    return (
        <>
          <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
               SOFTGRAY
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    PRODUCTS
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    SERVICES
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    ABOUT
                  </Link>
                </li>
				<li className='nav-item'>
                  <Link
                    to='/'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    JOBS
                  </Link>
                </li>
				<li className='nav-item'>
                  <Link
                    to='/'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    CONTACT
                  </Link>
                </li>
				<li className='nav-item'>
                  <Link
                    to='/'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    +81-00-0000-0000
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </>
      );
    }
    
    export default Navbar;