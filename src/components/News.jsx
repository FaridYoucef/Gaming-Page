import React from "react";
import "./styles/news.css";

const News = () => {
  return (
    <div className="news-container">
      <div className="news-title">
        <h1>LATEST</h1>
        <h1>NEWS</h1>
      </div>
      <div className="image-container">
        <div className="news1">
          <h2>Call of Duty to go to Game Pass in gaming shake-up</h2>
          <p>August 24</p>
          <p>
            Microsoft has torn up the rules of big video game launches by
            announcing its most eagerly awaited new title - Call of Duty: Black
            Ops 6 - will be available straight away to subscribers of its Game
            Pass service...
          </p>
        </div>
        <div className="news2">
          <h2>
            Fortnite released a Battle Pass item to shop, causing a huge
            backlash among the fans
          </h2>
          <p>July 24</p>
          <p>
            Nobody likes their stuff being removed due to an error, even when
            recompensed. Of course that stings, and Fortnite players had to
            endure just that recently. To put context, there was an error in the
            Item Shop today...
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
