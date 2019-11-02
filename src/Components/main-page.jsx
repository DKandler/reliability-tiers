import React from 'react';
import NavBar from './nav-bar';
import Header from './main-header';
import NBATier1 from './tiers/nba-tier-1';
import SoccerTier1 from './tiers/soccer-tier-1';
import TableHeader from './table-header';
import '../tiers.css'


import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);


class Mainpage extends React.Component{
    render(){
        return(
            <div>
                <header className = "header">
                <Header 
                    user={this.props.user}
                    signInWithGoogle={this.props.signInWithGoogle}
                    signOut={this.props.signOut} 
                    />
                    <NavBar />
                </header>
                <div>
                    <div className = "tier1">
                        <h3>Top Tier NBA Sources</h3>
                        {/* <TableHeader /> */}
                        <NBATier1 />
                    </div>  
                    <div className  = "tier1" >
                        <h3>Top Tier Soccer Sources</h3>
                        {/* <TableHeader /> */}
                        <SoccerTier1 />
                    </div>
                    
                </div>
                

            </div>

        )
    }

}
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Mainpage);