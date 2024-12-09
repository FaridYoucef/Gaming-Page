import React from "react";
import "./styles/news.css";

const News = () => {
  return (
    <section className="news-container">
      <div className="news-title">
        <h1 className="h1">LATEST NEWS</h1>
      </div>

      <div className="image-container">
        <div className="news1">
          <img src="/assets/images/codGpass.jpeg" alt="COD on Game Pass" />
          <div className="new1-content">
            <h2>COD to go to Game Pass in gaming shake-up</h2>
            <p className="date">August 24</p>
            <p>
              Microsoft has torn up the rules of big video game launches by
              announcing its most eagerly awaited new title...
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="news1">
          <img
            src="/public/assets/images/fortnitebpass.jpg"
            alt="Fortnite Battle Pass backlash"
          />
          <div className="new1-content">
            <h2>Battle Pass causing a backlash among the fans</h2>
            <p className="date">July 24</p>
            <p>
              Nobody likes their stuff being removed due to an error, even when
              recompensed. Of course that stings...
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
