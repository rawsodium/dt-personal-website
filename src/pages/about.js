import React from "react";
import Fade from 'react-reveal/Fade';
import './about.css';
import ghLogo from "../assets/github-logo.png";

/*
const Music = 
  <div>
    <Draggable>
      <p>Click here to play some of my favorite songs through Spotify!</p>
    </Draggable>
  </div>
  */

  /*
const albumChooser = 
  <Draggable>
    <div>
      <p>test</p>
    </div>
  </Draggable>
  */
const Header =
<div>
  <h1>Contact me!</h1>
</div>

const LinkedIn =
  <div class="child-contact">
    <a href="https://www.linkedin.com/in/deanna-turner04/" target="_blank">LinkedIn</a>
  </div>

const Resume =
  <div class="child-contact">
    <p><a href="./public/DeannaTurner.pdf" download>Resume</a></p>
  </div>

const GitHub =
  <div class="child-contact">
    <a href="https://github.com/rawsodium" target="_blank"><img src={ghLogo} width="50" height="50"></img></a>
  </div>


const Contact = 
<div class="parent-contact">
  {Header}
  <div class="links-contact">
    {LinkedIn}
    {Resume}
    {GitHub}
  </div>
</div>

const Pad =
<div>
</div>

const Name =
<div class="name">
  <Fade down>
    <h1>hi there, my name is deanna (she/her)</h1>
  </Fade>
</div>

const Pitch =
<div class="info-text">
  <Fade left>
    <p>
      I'm a second year at Northeastern University studying Computer Science and Music Technology.
    </p>
    <p>
      I'm passionate about software engineering, audio engineering, and the intersection between the two. In the future, I hope
      to work on developing audio plugins, digital audio workstations, and other music related software. 
    </p>
    <p>
      I love tinkering with new tools and technologies, and I'm always eager to learn and challenge myself. I'm currently working on improving
      this website and visualizing music data, both of which are using tools I haven't worked with before. Some other
      things I'd like to learn by building projects include Raspberry Pi, and some of the C++ audio libraries.
    </p>
    <p>
      I consider my ability to adapt and my resilience to be my greatest strengths. I did not come into college studying computer science,
      and as a result I have had to put in extra work to get myself up to speed with my peers. In addition to my coursework, I have self-studied
      several programming languages, tools, and technologies in order to diversify my skillset beyond what I've learned in the classroom. Additionally,
      through my training as a martial artist, I have learned to never back down from a challenge, no matter how difficult it gets, which is
      something that has shaped my work ethic and many other aspects of my life.
    </p>
    <p>
      I am currently seeking <a href="https://careers.northeastern.edu/cooperative-education/">co-op</a> and internship opportunities from June to December 2023.
    </p>
  </Fade>
</div>

const FunFacts =
<div class="info-text">
  <Fade right>
    <p>Some interesting tidbits about me:
      <ul>
        <li>I've been collecting records since 2018, and I've built my collection to over 200 albums and singles. 
        I like to collect albums from the 1960s to the present day. You can find my entire collection <a href="https://www.discogs.com/user/deannat/collection" target="_blank">here</a></li>
        <li>I'm a multi-instrumentalist. The instruments I play:
          <ul>
            <li>Violin, for 11 years</li>
            <li>Guitar (electric and acoustic), for 5 years</li>
            <li>Bass Guitar, for 2 years</li>
            <li>Piano (a basic amount), for 1 year</li>
          </ul>
        </li>
        <li>I did mixed martial arts for 11 years, nearly earning a black belt.</li>
      </ul>
    </p>
  </Fade>
</div>

const About = () => {
  return (
    <div>
      {Name}
      <div class="parent-about">
        {Pitch}
        {Contact}
        {Pad}
        {FunFacts}
      </div>
    </div>
  );
};
  
export default About;