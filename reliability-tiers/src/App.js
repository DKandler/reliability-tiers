import React from 'react';
import './App.css';
import Header from './components/header.jsx';
import NavBar from './components/nav-bar.jsx';
import TierContainer from './components/tier-container.jsx'

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './firebase.js';


const firebaseApp = firebase.initializeApp(firebaseConfig);


class App extends React.Component{  


  render() {
  
  return (
    <div className="App">
      <Header 
        user={this.props.user}
        signInWithGoogle={this.props.signInWithGoogle}
        signOut={this.props.signOut} 
      />
      <NavBar />
      <TierContainer />
    </div>
  );
};
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);