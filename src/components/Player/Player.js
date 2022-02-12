import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const {name, desc, auction_price, img, isSelected} = props.player;
    if(isSelected){
        return (
            <div className='player'>
                <div className="player-img">
                    <img src={img} alt="" />
                </div>
                <div className="player-info">
                    <h4>{name}</h4>
                    <p>{desc}</p>
                    <h5>Auction Price: ${auction_price}</h5>     
                    <button className="disabled-btn">ADDED</button>   
                </div>
            </div>
        );
    }
    else{
        return (
            <div className='player'>
                <div className="player-img">
                    <img src={img} alt="" />
                </div>
                <div className="player-info">
                    <h4>{name}</h4>
                    <p>{desc}</p>
                    <h5>Auction Price: ${auction_price}</h5>     
                    <button className="add-btn" onClick={() => props.handleAddPlayer(props.player)}>
                        <FontAwesomeIcon icon={faPlusCircle} /> ADD
                    </button>   
                </div>
            </div>
        );
    }

};

export default Player;