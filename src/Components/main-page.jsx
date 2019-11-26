import React from 'react';
import NavBar from './nav-bar';
import Header from './main-header';
import NBATier1 from './tiers/nba-tier-1';
import SoccerTier1 from './tiers/soccer-tier-1';
import '../tiers.css'
import Searchbar from './searchbar'
import Window from './modal'

import Modal from 'react-modal';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './firebase';
import HowTo from './howto.jsx'



class Mainpage extends React.Component{
    render(){
        return(
            <div>
                <header className = "header">
                <Header 
                   
                    />
                    <NavBar />
                </header>
               <Searchbar />
                <div>
                    <div className = "tier1">
                        <h3 className = 'topTierText'>Most reliable NBA news</h3>
                        {/* <TableHeader /> */}
                        <NBATier1 />
                    </div>  
                    <div className  = "tier1" >
                        <h3 className = 'topTierText'>Most reliable Soccer news</h3>
                        {/* <TableHeader /> */}
                        <SoccerTier1 />
                    </div>
                    <div className = 'howto'>
                    <HowTo />
                    </div>   
                    
                </div>
                

            </div>

        )
    }

}

export default (Mainpage);