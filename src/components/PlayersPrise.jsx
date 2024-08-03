import React from "react";

function PlayersPrise() {
  return (
    <div className="player-container">
      <h1>PLAYER OF THE WEEK</h1>
      <p>Test your skills and see your name every Sunday at 11AM</p>

      <div className="payerCard-container">
        <div className="palyer-card">
          <img src="/assets/images/player.jpg" alt="player" />
          <p>1354 XP ganied 08/26-09/02</p>
          <p>+20 Xcoins</p>
          <button>View Profile</button>
        </div>
      </div>
    </div>
  );
}

export default PlayersPrise;
