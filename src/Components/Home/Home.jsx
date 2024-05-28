import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-text">
      <h3 className="text1 slideleft"><span>Introduction</span></h3>
      <hr className="slideleft" />
      <h1 className="text2 slideleft">I'm Rohith,</h1>
      <h2 className="text3 slideleft">A Computer Science Graduate</h2>
      <hr className="slideleft" />
      <p className="slideleft">
        <span>"You Need To Accept The Fact That You're Not The Best, </span><br />
        <span>But The Least You Can Do Is Be Better Than Your Previous Self !"</span>
      </p>
    </div>
  );
}

export default Home;
