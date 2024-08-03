import React from 'react';
import './styles/matchFinder.css';
import { TiArrowSortedDown } from "react-icons/ti";
const MatchFinder = () => {
  return (
    <section className='match-container'>
  <div className='title-container'>
    <div className="match-tite">
      <h1>FIND A GAME</h1>
      <p>Pick a the game, the rule and the price</p>
    </div>

    <div className="match-menu">
      <button>
        Games
        <TiArrowSortedDown className='drop-icon' />
      </button>
      <button>
        Platforms
        <TiArrowSortedDown className='drop-icon' />
      </button>
    </div>

  </div>
  
    <table>
      <thead>
        <tr>
          <th>GAME</th>
          <th>PLATFORM</th>
          <th>ENTRY</th>
          <th>TEAM SIZE</th>
          <th>COMPETION</th>
          <th>SKILL LEVEL</th>
          <th>STARTING</th>
          <th>ACCEPT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fortnite</td>
          <td>Cross-Platform</td>
          <td>$5.00</td>
          <td>3vs3</td>
          <td>North America</td>
          <td>Advanced</td>
          <td>Available now</td>
          <td><button>Join</button></td>
        </tr>
      </tbody>
    </table>
    </section>
    )
}

export default MatchFinder