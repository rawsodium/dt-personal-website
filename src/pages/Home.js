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

const onButtonClick = () => {
  fetch('DeannaTurner1025.pdf').then(response => {
    response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'DeannaTurner.pdf';
        alink.click();
    })
  })
}

const LinkedIn =
  <div className="child-contact">
    <a href="https://www.linkedin.com/in/deanna-turner04/" alt="meaningful text" target="_blank" rel="noreferrer"><img src={liLogo} alt="meaningful text" width="50" height="50"></img></a>
  </div>

const Resume =
  <div className="child-contact">
    <p><button onClick={onButtonClick}><img src={resumeIcon} alt="meaningful text" width="75" height="75"></img></button></p>
  </div>

const GitHub =
  <div className="child-contact">
    <a href="https://github.com/rawsodium" target="_blank" rel="noreferrer"><img src={ghLogo} alt="meaningful text" width="50" height="50"></img></a>
  </div>

const FunFacts =
<div className="info-text">
    <p>
      <p><Fade cascade duration="100" triggerOnce>Some interesting tidbits about me:</Fade></p>
    <Fade cascade direction="down" triggerOnce>
      <ul>
        <li>I've been collecting records since 2018, and I've built my collection to over 200 albums and singles. 
        I like to collect albums from the 1960s to the present day. You can find my entire collection <a href="https://www.discogs.com/user/deannat/collection" target="_blank" rel="noreferrer">here</a></li>
        <li>I'm a multi-instrumentalist. I've played violin for 12 years, guitar (electric and acoustic) for 5 years, bass guitar for 2 years, and I've picked up a very basic amount of piano.</li>
        <li>I did mixed martial arts for 11 years, nearly earning a black belt.</li>
        <li>My favorite bands and artists are: Fleetwood Mac, Stevie Nicks, The Beatles, ABBA, The Beach Boys, and Harry Styles</li>
      </ul>
      </Fade>
    </p>
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
  {FunFacts}
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
      I'm in the final year of my masters in Computer Science at Northeastern University, slated to graduate in May 2026. 
      I graduated with my Bachelor's in Computer Science and Music Technology from Northeastern in May 2025.
    </p>
    <p>
      I'm passionate about software engineering, audio engineering, and the intersection between the two. Being both a musician and a software
      engineer has uniquely shaped my perspective in that I deeply understand both the technical and creative aspects of a project. I use this blend of
      knowledge in everything I do in order to make sure the things I build strike the right balance of functionality and user satisfaction.
    </p>
    <p>
      I love tinkering with new tools and technologies, and I'm always eager to learn and challenge myself. Some
      things I'd like to learn by building projects include Raspberry Pi and some of the C++ audio libraries.
    </p>
    <p>
      I consider my ability to adapt and my resilience to be my greatest strengths. I did not originally come into college studying computer science,
      and as a result I had to put in extra work to get myself up to speed with my peers. In addition to my coursework, I have self-studied
      several programming languages, tools, and technologies in order to diversify my skillset beyond what I've learned in the classroom. Additionally,
      through my training as a martial artist, I have learned to never back down from a challenge, no matter how difficult it gets, which is
      something that has shaped my work ethic and many other aspects of my life.
    </p>
    <p>
      I am currently seeking full-time software engineering jobs in the Boston area!.
    </p>
  </Fade>
</div>

function Home() {
    return (
        <div>
            {Name}
            <div className="parent-about">
                {Pitch}
                {Contact}
                {Pad}
            </div>
      </div>
    );
}

export default Home;
