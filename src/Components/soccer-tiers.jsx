import React from 'react';
import SoccerTier1 from './soccer-tier-1';
import SoccerTier2 from './soccer-tier-2';
import SoccerTier3 from './soccer-tier-3';
import SoccerTier4 from './soccer-tier-4';
import SoccerTier5 from './soccer-tier-5';
import TableHeader from './table-header';


export default function SoccerTiers(props){
    return(
        <div>
            <TableHeader />
            <SoccerTier1 />
            <SoccerTier2 />
            <SoccerTier3 />
            <SoccerTier4 />
            <SoccerTier5 />
        </div>
        

    )
}