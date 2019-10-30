import React from 'react';
import './App.css';
import Header from './components/header.jsx';
import NavBar from './components/nav-bar.jsx';
import TierContainer from './components/tier-container.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <TierContainer />
    </div>
  );
}

export default App;
