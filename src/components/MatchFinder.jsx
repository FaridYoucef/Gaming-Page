import React from 'react';
import './styles/matchFinder.css';
import { TiArrowSortedDown } from "react-icons/ti";
const MatchFinder = () => {
  return (
  <section className='match-container'>
    <div className="match-tite">
      <h1>FIND A GAME</h1>
      <p>Pick a the game, the rule and the price</p>
    </div>

    <div className="match-menu">
      <button>
        Games
        <TiArrowSortedDown />
      </button>
      <button>
        Platforms
        <TiArrowSortedDown />
      </button>
    </div>
  </section>
  )
}

export default MatchFinder