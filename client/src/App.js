import React, { Component } from "react";
import axios from "axios";
import PlayerCard from "./components/PlayerCard";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  // This code sets the initial state for players as an empty array
  state = {
    players: []
  };

  // This lifecycle method makes an axios call once <App/> is rendered, retrieves the player info as state, and sets it in 'players'.
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({
          players: res.data
        });
        console.log("This is res.data: ", res.data);
      })
      .catch(err => {
        console.log("You failed! Here's why: ", err);
      });
  }

  // This code renders the components of the app and utilizes .map to generate inidividual cards for the players, passing their info to the PlayerCard component as props.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="player-card-container">
          {this.state.players.map(player => {
            console.log("Player is: ", player);
            return (
              <PlayerCard
                props={player}
                key={player.id}
                name={player.name}
                country={player.country}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
