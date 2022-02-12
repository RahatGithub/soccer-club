import React from 'react';
import './Summary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFutbolBall } from '@fortawesome/free-solid-svg-icons';

const Summary = (props) => {
    const {selectedPlayers} = props;

    let totalCost = 0;
    for(let i=0; i<selectedPlayers.length; i++){
        const player = selectedPlayers[i];
        totalCost += player.auction_price;
    }

    return (
        <div>
            <h2 style={{textAlign:'center'}}>Summary</h2>
            <h4>Selected: {selectedPlayers.length}</h4>
            <h4>Total cost: ${totalCost}</h4>
            <h4>Squad: </h4>
            <ul className="players-ul">
            {
                selectedPlayers.map(player => <li><FontAwesomeIcon icon={faFutbolBall} /> {player.name}</li>)
            }
            </ul>
        </div>
    );
};

export default Summary;