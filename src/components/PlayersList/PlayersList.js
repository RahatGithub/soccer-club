import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import playerData from '../../data/data.json';
import Summary from '../Summary/Summary';
import './PlayersList.css';

const PlayersList = () => {

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleAddPlayer = (player) => {
        const newCollection = [...selectedPlayers, player];
        setSelectedPlayers(newCollection);
        if(player.isSelected === false){
            player.isSelected = true;
        }
        else{
            player.isSelected = false;
        }
    }

    return (
        <div className="players-list">
            <div className="players">
            {
                playerData.map(player => 
                <Player 
                    key={player.id}
                    player={player}
                    handleAddPlayer={handleAddPlayer}>
                </Player>)
            }
            </div>
            <div className="summary">
                <Summary selectedPlayers={selectedPlayers}></Summary>
            </div>
        </div>
    );
};

export default PlayersList;