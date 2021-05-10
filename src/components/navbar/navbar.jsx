
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logos/boat.svg';
// import { ReactComponent as Logo2 } from '../../assets/logos/icon2.svg';
import {Button} from '../custom-button/button';
import './navbar.scss';

function Navbar() {
    const [click, setClick] = useState(false);
     // eslint-disable-next-line
    const [button, setButton] = useState(true);



    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    const handleClick = () => setClick(!click);
    const closeChange = () => setClick(false);
    const closeMobileMenu = () => setClick(false);
    console.log(click);

    return (
        <div>
           <nav className= 'navbar'>
           <Link to='/' >
                    <Logo className= 'logo' />
                </Link>
               <div className= 'navbar-container'>
                
                <div className='menu-icon' onClick= {handleClick}>
                    <i className= {click ? 'fas fa-times' : 'fas fa-ellipsis-v' } /> 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to ='/' className= 'nav-links' onClick={closeChange} >
                            home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/Services' className= 'nav-links' onClick={closeChange} >
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/trips' className= 'nav-links' onClick={closeChange} >
                            Plan a trip
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='business' className= 'nav-links' onClick={closeChange} >
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>
                    </li>                    
                    {/* <li>
                        <Link to='accounts' >
                            <Logo2 className= 'logo2' />
                        </Link>
                    </li> */}
                </ul>
                
               </div>
               <Link to = 'SignUp'>
                    <Button
                        className='btn nav-item'
                        buttonStyle='btn--outline'
                        buttonSize='btn--medium'
                        onClick={console.log('hey')}
                    >
                        Sign Up
                    </Button>
                </Link>
           </nav>
             
        </div>
    )
}

export default Navbar;
