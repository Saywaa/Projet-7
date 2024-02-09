import React from 'react';

function Host (props) {
    return (
        <div>
            <span className='hostName'>{props.name}</span>
            <img className='hostImage' src={props.picture} alt="Hôte"/>    
        </div>
    )
}

export default Host;