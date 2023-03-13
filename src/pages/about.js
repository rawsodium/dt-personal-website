import React from "react";
import Fade from 'react-reveal/Fade';
import './about.css';

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
      I love tinkering with new tools and technologies, and I'm always eager to learn. I'm currently working on improving
      this website and visualizing music data, both of which are using tools I haven't made much use of before. Some other
      things I'd like to learn through building projects include Raspberry Pi, and some of the C++ audio libraries.
    </p>
    <p>
      I didn't discover my passion for computer science until I came to college. Originally, I was studying engineering, and the work
      we did with C++ made me fall in love with coding. Being able to write a program from start to finish that works
      was a very satisfying feeling. 
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

/*
const About = () => {
  return (
    <div class="about-parent">
      <h1>
        hi there, my name is deanna (she/her)
      </h1>
      <p>
        I'm a second year at Northeastern University studying Computer Science and Music Technology.
      </p>
      <p>
        I'm passionate about software engineering, audio engineering, and the intersection between the two. In the future, I hope
        to work on developing audio plugins, digital audio workstations, and other music related software. 
      </p>
      <p>
        I love tinkering with new tools and technologies, and I'm always eager to learn. I'm currently working on improving
        this website and visualizing music data, both of which are using tools I haven't made much use of before. Some other
        things I'd like to learn through building projects with include Raspberry Pi, and some of the C++ audio libraries.
      </p>
      <p>
        I didn't discover my passion for computer science until I came to college. Originally, I was studying engineering, and the work
        we did with C++ made me fall in love with coding. Being able to write a program from start to finish that works
        was a very satisfying feeling. 
      </p>
      <p>
        Some interesting tidbits about me:
        <ul>
          <li>I've been collecting records since 2018, and I've built my collection to over 200 albums and singles. 
            I like to collect albums from the 1960s to the present day. You can find my entire collection <a href="https://www.discogs.com/user/deannat/collection?header=1" target="_blank">here</a></li>
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
    </div>
  );
};
*/

const About = () => {
  return (
    <div>
      {Name}
      <div class="parent">
        {Pitch}
        {Pad}
        {Pad}
        {FunFacts}
      </div>
    </div>
  );
};
  
export default About;