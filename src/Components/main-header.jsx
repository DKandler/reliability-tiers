import React from 'react';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';
import { Link } from 'react-router-dom';
import '../header.css'
import Login from './login';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Header extends React.Component {
  render() {
   
  
    return (
      <div className = 'header-container'>
  
          <div >
            <h1><Link className = 'title' to = '/'>Reliability Tiers</Link></h1>
            <p className = "title-text">See if your source is reliable.</p>
          </div>
          <div>
            <Login 
             user={this.props.user}
             signInWithGoogle={this.props.signInWithGoogle}
             signOut={this.props.signOut} 
             />
          </div>
       
        </div>
       
    );
}
};

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Header);