import React from 'react';
import {Link} from 'react-router-dom';
import '../nav-bar.css'

const NavBar = (props) => {
    return(
        <div className = "navBarContainer">
            <ul className = 'listContainer'> 
                <li><Link className = 'navItem' to = '/nbatiers'>NBA</Link></li>
                <li><Link className = 'navItem' to = '/soccertiers'>Soccer</Link></li>
                <li><Link className = 'navItem' to = '/nfltiers'>NFL</Link></li>
                <li><Link className = 'navItem' to = '/mlbtiers'>MLB</Link></li>
                <li><Link className = 'navItem' to = '/nhltiers'>NHL</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;