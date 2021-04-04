// eslint-disable-next-line
import React, { newState } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logos/icon1.svg';
import './navbar.scss';

function Navbar() {
    return (
        <div>
           <nav className= 'navbar'>
               <div className= 'navbar-container'>
                <Link to='/' className='logo-container'>
                    <Logo className= 'logo' />
                </Link>
               </div>
           </nav>
             
        </div>
    )
}

export default Navbar;
