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
          <th className='hidden'>PLATFORM</th>
          <th>ENTRY</th>
          <th>TEAM SIZE</th>
          <th className='hidden'>COMPETION</th>
          <th className='hidden'>SKILL LEVEL</th>
          <th className='hidden'>STARTING</th>
          <th>ACCEPT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fortnite</td>
          <td  className='hidden'>Cross-Platform</td>
          <td className='entry-fee'>$10.00</td>
          <td>3vs3</td>
          <td  className='hidden'>North America</td>
          <td  className='hidden'>Advanced</td>
          <td  className='hidden'>Available now</td>
          <td><button className='join-btn'>Join</button></td>
        </tr>
        <tr>
          <td>Diable</td>
          <td
          className='hidden'>Cross-Platform</td>
          <td className='entry-fee'>$10.00</td>
          <td>3vs3</td>
          <td
          className='hidden'>North America</td>
          <td
          className='hidden'>Advanced</td>
          <td
          className='hidden'>Available now</td>
          <td><button className='join-btn'>Join</button></td>
        </tr>
        <tr>
          <td>Call of duty</td>
          <td
          className='hidden'>Cross-Platform</td>
          <td className='entry-fee'>$10.00</td>
          <td>3vs3</td>
          <td
          className='hidden'>North America</td>
          <td
          className='hidden'>Advanced</td>
          <td
          className='hidden'>Available now</td>
          <td><button className='join-btn'>Join</button></td>
        </tr>
        <tr>
          <td>Apex</td>
          <td
          className='hidden'>Cross-Platform</td>
          <td className='entry-fee'>$10.00</td>
          <td>3vs3</td>
          <td
          className='hidden'>North America</td>
          <td
          className='hidden'>Advanced</td>
          <td
          className='hidden'>Available now</td>
          <td><button className='join-btn'>Join</button></td>
        </tr>
      </tbody>
    </table>
    </section>
    )
}

export default MatchFinder