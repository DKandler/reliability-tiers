import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return(
        <div className = "NavBar">
            <ul>
                <li><Link to = '/nbatiers'>NBA</Link></li>
                <li><Link to = '/soccertiers'>Soccer</Link></li>
                <li><a>NFL</a></li>
                <li><a>MLB</a></li>
                <li><a>NHL</a></li>
            </ul>
        </div>
    )
}

export default NavBar;