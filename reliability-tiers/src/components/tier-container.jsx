import React from 'react';
import Tier1 from './tiers/tier-1.jsx';
import Tier2 from './tiers/tier-2.jsx';
import Tier3 from './tiers/tier-3.jsx';
import Tier4 from './tiers/tier-4.jsx';
import Tier5 from './tiers/tier-5.jsx';


const TierContainer = (props) => {
    return(
        <div className = "TierContainer">
            <Tier1 />
            <Tier2 />
            <Tier3 />
            <Tier4 />
            <Tier5 />
        </div>
    )
} 

export default TierContainer;