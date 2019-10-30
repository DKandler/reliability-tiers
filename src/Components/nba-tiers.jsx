import React from 'react';
import NBATier1 from './nba-tier-1';
import NBATier2 from './nba-tier-2';
import NBATier3 from './nba-tier-3';
import NBATier4 from './nba-tier-4';
import NBATier5 from './nba-tier-5';
import TableHeader from './table-header';


export default function NBATiers(props) {
    return (
        <div>
            <TableHeader />
            <NBATier1 />
            <NBATier2 />
            <NBATier3 />
            <NBATier4 />
            <NBATier5 />
        </div>


    )
}