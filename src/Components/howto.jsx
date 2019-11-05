import React from 'react';

const HowTo = (props) => {
    return(
        <div className = 'howToContainer'>
            <h3>How the tiers work.</h3>
            <ul>
                <li><strong>(Tier 1)</strong>: Highest quality and almost never wrong.</li>
                <li><strong>(Tier 2)</strong>: Proven to have current and reliable sources.</li>
                <li><strong>(Tier 3)</strong>: Average reliability.</li>
                <li><strong>(Tier 4)</strong>: Aggregators, indirect sources and low reliability.</li>
                <li><strong>(Tier 5)</strong>: Unreliable.</li>
            </ul>
        </div>
    )
    }
export default HowTo;