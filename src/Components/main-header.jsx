import React from 'react';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';
import { Link } from 'react-router-dom';
import '../header.css'


class Header extends React.Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
  
    return (
      <div className = 'header-container'>
  
          <div >
            <h1><Link className = 'title' to = '/'>Reliability Tiers</Link></h1>
            <p className = "title-text">See if your source is reliable.</p>
          </div>
        <div className = 'welcome-container'>
          {
          user 
          ? <p>Hello, <strong>{user.displayName}</strong> </p>
          : <p>Please sign in.</p>
      }
       
       
      {
        user
          ? <button  onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      }
      </div>
        </div>
       
    );
}
};

export default Header;