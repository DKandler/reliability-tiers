import React from 'react';
import logo from './logo.svg';
import './App.css';
import SoccerTiers from './Components/soccer-tiers';
import NBATiers from './Components/nba-tiers'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function App() {
  return (
    <div className="App">
      
      <SoccerTiers />
      <NBATiers />
    </div>
  );
}

export default App;
