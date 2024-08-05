import React from "react";
import "./styles/playerPrise.css";

function PlayersPrise() {
  return (
    <div className="player-container">    
      <div className="player-title">
        <h1>PLAYER OF THE WEEK</h1>
        <p>Test your skills and see your name every Sunday at 11AM</p>
      </div>

      <div className="palyerCard-container">
        <div className="palyer-card">
          <img src="/assets/images/player.jpg" alt="player" />
          <h1>Elgorn</h1>
          <p>1354 XP gained 08/26-09/02</p>
          <p className="coins">+20 Xcoins</p>
          <button>View Profile</button>
        </div>
        <div className="palyer-card card-1">
          <img src="/assets/images/player1.jpg" alt="player" />
          <h1>MasterofDesaster</h1>
          <p>1354 XP gained 08/26-09/02</p>
          <p className="coins">+20 Xcoins</p>
          <button>View Profile</button>
        </div>
        <div className="palyer-card">
          <img src="/assets/images/player2.webp" alt="player" />
          <h1>Setou1</h1>
          <p>1354 XP gained 08/26-09/02</p>
          <p className="coins">+20 Xcoins</p>
          <button>View Profile</button>
        </div>
      </div>
    </div>
  );
}

export default PlayersPrise;
