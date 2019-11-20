import React from 'react';
import SoccerTier1 from './tiers/soccer-tier-1';
import SoccerTier2 from './tiers/soccer-tier-2';
import SoccerTier3 from './tiers/soccer-tier-3';
import SoccerTier4 from './tiers/soccer-tier-4';
import SoccerTier5 from './tiers/soccer-tier-5';
import Header from './main-header';
import NavBar from './nav-bar';
import SoccerSearchbar from './soccer-searchbar'
import '../App.css'

import 'firebase/firestore';
import 'firebase/auth';

export default function SoccerTiers(props){
    return(
        <div>
            <Header />
            <NavBar />
            <div>
                <h1 className = 'sportsheader'>Soccer</h1>
            </div>
            <SoccerSearchbar />
            <SoccerTier1 />
            <SoccerTier2 />
            <SoccerTier3 />
            <SoccerTier4 />
            <SoccerTier5 />
            <div className='bottompadding'> </div>
        </div>
        

    )
}