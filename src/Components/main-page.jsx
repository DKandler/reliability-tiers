import React from 'react';
import NavBar from './nav-bar';
import Header from './main-header';
import NBATier1 from './tiers/nba-tier-1';
import SoccerTier1 from './tiers/soccer-tier-1';
import TableHeader from './table-header';

export default class Mainpage extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <Header />
                    <NavBar />
                </header>
                <div>
                    <div>
                        <h3>NBA</h3>
                        <TableHeader />
                        <NBATier1 />
                    </div>
                    <div>
                        <h3>Soccer</h3>
                        <TableHeader />
                        <SoccerTier1 />
                    </div>
                    
                </div>
                

            </div>

        )
    }
}