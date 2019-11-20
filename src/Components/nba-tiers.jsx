import React from 'react';
import NBATier1 from './tiers/nba-tier-1';
import NBATier2 from './tiers/nba-tier-2';
import NBATier3 from './tiers/nba-tier-3';
import NBATier4 from './tiers/nba-tier-4';
import NBATier5 from './tiers/nba-tier-5';
import Header from './main-header';
import NavBar from './nav-bar';
import NBASearchbar from './nba-searchbar'

import 'firebase/firestore';
import 'firebase/auth';





export default function NBATiers(props) {
    return (
        <div>
            <Header />
            <NavBar />
            <div>
                <h1 className = 'sportsheader'>NBA</h1>
            </div>
            <NBASearchbar />
            <NBATier1 />
            <NBATier2 />
            <NBATier3 />
            <NBATier4 />
            <NBATier5 />
            <div className='bottompadding'></div>
        </div>


    )
}