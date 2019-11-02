import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import NBATiers from './Components/nba-tiers';
import SoccerTiers from './Components/soccer-tiers';
import Mainpage from './Components/main-page';
import ComingSoon from './Components/coming-soon';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const router = (
    <Router>
        <div className = "body">

            <Route path='/' exact component={Mainpage} />
            <Route path='/nbatiers' component={NBATiers} />
            <Route path='/soccertiers' component={SoccerTiers} />
            <Route path='/nfltiers' component={ComingSoon} />
            <Route path='/mlbtiers' component={ComingSoon} />
            <Route path='/nhltiers' component={ComingSoon} />

        </div>
    </Router>


)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
