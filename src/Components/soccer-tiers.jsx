import React from 'react';
import SoccerTier1 from './tiers/soccer-tier-1';
import SoccerTier2 from './tiers/soccer-tier-2';
import SoccerTier3 from './tiers/soccer-tier-3';
import SoccerTier4 from './tiers/soccer-tier-4';
import SoccerTier5 from './tiers/soccer-tier-5';
import TableHeader from './table-header';
import Header from './main-header';
import NavBar from './nav-bar';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './firebase';

export default function SoccerTiers(props){
    return(
        <div>
            <Header />
            <NavBar />
            <SoccerTier1 />
            <SoccerTier2 />
            <SoccerTier3 />
            <SoccerTier4 />
            <SoccerTier5 />
        </div>
        

    )
}