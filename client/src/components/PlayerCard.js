import React from "react";

const PlayerCard = props => {
    console.log("This is PlayerCard props: ", props)
    return (
        <div className="player-card">
        <p>Name: {props.name}</p>
        <p>Country: {props.country}</p>
        </div>
    )
}

export default PlayerCard;