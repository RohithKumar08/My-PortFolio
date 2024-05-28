import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-text">
      <h1><span>About Me</span></h1>
      <hr />
      <div className='about'>
        <p>Welcome!, I'm Rohith, this is my Portfolio.</p>
        <p>I’m a studious person and I'm aiming to learn lot more in the future. I’m currently looking further for opportunities to enhance my skills and build a career for myself. If you are looking for me, I'm here for you.</p>
        <p>I have recently completed my bachelor's degree on Computer Science Engineering @Velammal Engineering College in Chennai. Throughout my studies, I have been focusing on Java Programming with practical knowledge.</p>
        <p>I like simplicity and I prefer my projects being simple and easy to use with higher efficiency. My website might be simple, but the people who access my website will be able to understand the content I intended to deliver.</p>
      </div>
      
      <h1><span>Education History</span></h1>
      <hr />
      <div className='about'>
        <p>10TH Standard - Velammal Vidhyashram, Surapet, Chennai-600066. <span className='mark'>Score - 77 / 100 % </span></p>
        <p>12TH Standard - Velammal Vidhyashram, Surapet, Chennai-600066. <span className='mark'>Score - 79 / 100 % </span></p>
        <p>UG - Velammal Engineering College, Surapet, Chennai-600066. <span className='mark'>Score - 8.73 / 10 </span></p>
      </div>
    </div>
  );
}

export default About;
