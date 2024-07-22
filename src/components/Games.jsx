
import './styles/Games.css'
import React from 'react'

const Games = () => {
  return (
    <section >
        <div className='games-title'>
            <h1>GAMES</h1>
            <p>Select you favorite Game and test your Skills.</p>
        </div>
        
        <div className='cards-container'>
            <div className="card" >
                <img src="/assets/images/fortnite-battle-royale.jpeg" alt="" />
            </div>
            <div className="card" >
                <img src="/assets/images/lol.jpeg" alt="" />
            </div>
            <div className="card" >
                <img src="/assets/images/ware-zone.jpeg" alt="" />
            </div>
            <div className="card" >
                <img src="/assets/images/hrtswn.jpeg" alt="" />
            </div>
            <div className="card" >
                <img src="/assets/images/valorant.jpeg" alt="" />
            </div>
            <div className="card" >
                <img src="/assets/images/rocket.jpeg" alt="" />
            </div>
            <div className="card" >
                <img src="/assets/images/Overwatch.jpg" alt="" />
            </div>
            <div className="card" >
                <img src="/assets/images/rnbw.jpeg" alt="" />
            </div>
            <div className="card" >
                <img src="/assets/images/modernW.jpeg" alt="" />
            </div>
            <div className="card" >
                <img src="/assets/images/diablo.png" alt="" />
            </div>
            <div className="card" >
                <img src="/assets/images/apex.jpeg" alt="" />
            </div>
            <div className="card" >
                <img src="/assets/images/pubg.jpeg" alt="" />
            </div>
        
        </div>
    </section>
  )
}

export default Games