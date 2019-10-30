import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return(
        <div className = "NavBar">
            <ul>
                <li><Link to = '/nbatiers'>NBA</Link></li>
                <li><Link to = '/soccertiers'>Soccer</Link></li>
                <li><Link to = '/nfltiers'>NFL</Link></li>
                <li><Link to = '/mlbtiers'>MLB</Link></li>
                <li><Link to = '/nhltiers'>NHL</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;