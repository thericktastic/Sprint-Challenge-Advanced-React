import React, { Component } from "react";
import axios from "axios";
import PlayerCard from "./components/PlayerCard";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {
    players: []
  };

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
