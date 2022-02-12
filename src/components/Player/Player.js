import React from 'react';
import './Player.css';

const Player = (props) => {
    const {name, desc, auction_price, img} = props.player;
    console.log(img)
    return (
        <div className='player'>
            <div className="player-img">
                <img src={img} alt="" />
            </div>
            <div className="player-info">
                <h4>{name}</h4>
                <p>{desc}</p>
                <h5>Auction Price: ${auction_price}</h5>
        
                <button className="add-btn" onClick={() => props.handleAddPlayer(props.player)}>Add</button>
                
            </div>
        </div>
    );
};

export default Player;