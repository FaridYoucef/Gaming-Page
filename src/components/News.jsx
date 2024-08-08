import React from "react";
import "./styles/news.css";

const News = () => {
  return (
    <section className="news-container">
      <div className="news-title">
        <h2>LATEST</h2>
        <h1 className="h1">NEWS</h1>
      </div>

      <div className="image-container">
        <div className="news1">
          <img src="/public/assets/images/codGpass.jpeg" alt="" />
          <div className="new1-content">
            <h4>COD to go to Game Pass in gaming shake-up</h4>
            <h5>August 24</h5>
            <p>
              Microsoft has torn up the rules of big video game launches by
              announcing its most eagerly awaited new title...
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="news1">
          <img src="/public/assets/images/fortnitebpass.jpg" alt="" />
          <div className="new1-content">
            <h4>Battle Pass causing a backlash among the fans</h4>
            <h5>July 24</h5>
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
