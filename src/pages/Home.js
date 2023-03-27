import React from "react";
import "../styles/home.css";
import ghLogo from "../assets/github-logo.png";
import liLogo from "../assets/linkedin-logo.png";
import resumeIcon from "../assets/resume-icon.png";
import { Fade } from 'react-awesome-reveal';

const Header =
<div>
  <h2>Contact me:</h2>
</div>

const LinkedIn =
  <div className="child-contact">
    <a href="https://www.linkedin.com/in/deanna-turner04/" alt="meaningful text" target="_blank" rel="noreferrer"><img src={liLogo} alt="meaningful text" width="50" height="50"></img></a>
  </div>

const Resume =
  <div className="child-contact">
    <p><a href="./public/DeannaTurner.pdf" download><img src={resumeIcon} alt="meaningful text" width="75" height="75"></img></a></p>
  </div>

const GitHub =
  <div className="child-contact">
    <a href="https://github.com/rawsodium" target="_blank" rel="noreferrer"><img src={ghLogo} alt="meaningful text" width="50" height="50"></img></a>
  </div>

const Contact = 
<div className="parent-contact">
  <div className="container">
    <table>
      <tr>
        <th colspan="3">{Header}</th>
      </tr>
      <tr>
        <td>{LinkedIn}</td>
        <td>{Resume}</td>
        <td>{GitHub}</td>
      </tr>
    </table>
  </div>
</div>

const Pad =
<div>
</div>

const Name =
<div className="name">
  <h1>
    <Fade cascade duration="200" triggerOnce>
      hi there, my name is Deanna
    </Fade>
  </h1>
</div>

const Pitch =
<div className="info-text">
  <Fade cascade direction="down" triggerOnce damping={0.7}>
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
      things I'd like to learn by building projects include Raspberry Pi, some of the C++ audio libraries, and SQL.
    </p>
    <p>
      I consider my ability to adapt and my resilience to be my greatest strengths. I did not come into college studying computer science,
      and as a result I have had to put in extra work to get myself up to speed with my peers. In addition to my coursework, I have self-studied
      several programming languages, tools, and technologies in order to diversify my skillset beyond what I've learned in the classroom. Additionally,
      through my training as a martial artist, I have learned to never back down from a challenge, no matter how difficult it gets, which is
      something that has shaped my work ethic and many other aspects of my life.
    </p>
    <p>
      I am currently seeking <a href="https://careers.northeastern.edu/cooperative-education/" target="_blank" rel="noreferrer">co-op</a> and internship opportunities from June to December 2023.
    </p>
  </Fade>
</div>

const FunFacts =
<div className="info-text">
    <p>
      <p><Fade cascade duration="100" triggerOnce>Some interesting tidbits about me:</Fade></p>
    <Fade cascade direction="down" triggerOnce>
      <ul>
        <li>I've been collecting records since 2018, and I've built my collection to over 200 albums and singles. 
        I like to collect albums from the 1960s to the present day. You can find my entire collection <a href="https://www.discogs.com/user/deannat/collection" target="_blank" rel="noreferrer">here</a></li>
        <li>I'm a multi-instrumentalist. The instruments I play:
          <ul>
            <li>Violin, for 11 years</li>
            <li>Guitar (electric and acoustic), for 5 years</li>
            <li>Bass Guitar, for 2 years</li>
            <li>Piano (a basic amount), for 1 year</li>
          </ul>
        </li>
        <li>I did mixed martial arts for 11 years, nearly earning a black belt.</li>
        <li>My favorite bands and artists are: Fleetwood Mac, Stevie Nicks, The Beatles, ABBA, The Beach Boys, and Harry Styles</li>
      </ul>
      </Fade>
    </p>
</div>

function Home() {
    return (
        <div>
            {Name}
            <div className="parent-about">
                {Pitch}
                {Contact}
                {Pad}
                {FunFacts}
            </div>
      </div>
    );
}

export default Home;