import React from 'react';
import '../comingsoon.css';
import Header from './main-header';
import NavBar from './nav-bar';


const ComingSoon = () => {
    return(
    <div>
           <Header />
           <NavBar />
        <div className="bgimg">
            <div className="middle">
                <h1>COMING SOON</h1>
            </div>
        </div>

    </div>
    
    )
} 

export default ComingSoon;