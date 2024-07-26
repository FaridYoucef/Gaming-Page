import React from 'react';
import './styles/matchFinder.css';

const MatchFinder = () => {
  return (
  <section>
    <div className="match-tite">
      <h1>FIND A GAME</h1>
      <p>Pick a the game, the rule and the price</p>
    </div>

    <div className="match-menu">
      <ul>
        <li>Games</li>
        <li>Platforms</li>
      </ul>
    </div>
  </section>
  )
}

export default MatchFinder