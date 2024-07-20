import React from 'react'
import "./styles/header.css";

const Header = () => {
  return (
    <header className='header'>
        <div className='left-side'>
            <div className="logo">GamingMe</div>
            <nav>
                <ul className='nav-menu'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#games">Games</a></li>
                    <li><a href="#tournements">Tournements</a></li>
                    <li><a href="#community">Community</a></li>
                    <li><a href="#countact">Contact</a></li>
                </ul>
            </nav>
        </div>
   
        <div className='button-ct'>
                <button>Sign In</button>
                <button>Join</button>
            </div>
    </header>
  )
}

export default Header