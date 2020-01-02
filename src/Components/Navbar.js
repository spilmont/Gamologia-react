import React from 'react'
import logo from '../images/nintendo-entertainment-system-4003973_640.png'
import {Link} from 'react-router-dom';

export default  function Navbar() {
    return(
        <nav className="navbar">
            <Link to='/'>
            <img src={logo} width='50' alt='logo' />
            <span className='title mr5pc'> gamologia</span>
            </Link>
            <span>
            <Link  to='/all'>
                <span className='mr2pc'>tous les jeux</span>
            </Link>

            <Link to='/supernintendo'>
                <span className='mr2pc'>Super Nintendo</span>
            </Link>

            <Link to='/megadrive'>
                <span className='mr2pc'>Megadrive</span>
            </Link>
            </span>
        </nav>
    )

}

