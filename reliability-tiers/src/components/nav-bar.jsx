import React from 'react';

const NavBar = (props) => {
    return(
        <div className = "NavBar">
            <ul>
                <li><a>NBA</a></li>
                <li><a>Soccer</a></li>
                <li><a>NFL</a></li>
                <li><a>MLB</a></li>
                <li><a>NHL</a></li>
            </ul>
        </div>
    )
}

export default NavBar;