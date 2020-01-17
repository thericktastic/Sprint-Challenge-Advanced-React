import React from "react";

// This code returns a div for each player. Their names and countries are passed down from App.js.
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