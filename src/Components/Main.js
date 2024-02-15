import React from "react";

function HomePage() {
  return (
    <div className="main-container pt-3" id="homePage">
      <div className="home-body-container">
        <p className="news-para p-2">
          <span className="news-span">News</span> Get update news stay connent
          with Buddify
        </p>
        <h1 className="heading">True Friends Are Great Riches</h1>
        <p className="home-para">
          Create authentic relationships for your Buddify
        </p>
        <p className="home-para"> Submit Your Details.......</p>
        <div>
          <button className="button">Get Started</button>
        </div>
        <div className="img-con">
          <img src="./images/group.png" alt="" className="home-image" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
