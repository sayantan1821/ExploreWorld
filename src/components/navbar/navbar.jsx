
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logos/icon1.svg';
import { ReactComponent as Logo2 } from '../../assets/logos/icon2.svg';
import './navbar.scss';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeChange = () => setClick(false);
    console.log(click);

    return (
        <div>
           <nav className= 'navbar'>
               <div className= 'navbar-container'>
                <Link to='/' className='logo-container'>
                    <Logo className= 'logo' />
                </Link>
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
                        <Link to ='services' className= 'nav-links' onClick={closeChange} >
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='plan-a-trip' className= 'nav-links' onClick={closeChange} >
                            Plan a trip
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='business' className= 'nav-links' onClick={closeChange} >
                            Business
                        </Link>
                    </li>
                </ul>
                <Link to='/' className='logo-container'>
                    <Logo2 className= 'logo' />
                </Link>
               </div>
               
           </nav>
             
        </div>
    )
}

export default Navbar;
