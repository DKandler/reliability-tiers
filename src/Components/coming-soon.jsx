import React from 'react';
import '../comingsoon.css';
import Header from './main-header';
import NavBar from './nav-bar';


const ComingSoon = () => {
    return(
    <div>
        <div className="bgimg">
            <div className="topleft">
                    <Header />
                    
            </div>
            <div className="middle">
                <h1>COMING SOON</h1>
                <hr></hr>
                <p></p>
            </div>
            <div className="bottomleft">
                <p>MLB, NFL, and NHL tiers coming soon!</p>
                <NavBar />
            </div>
        </div>

    </div>
    
    )
} 

export default ComingSoon;