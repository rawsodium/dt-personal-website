import React from 'react';
import '../styles/projects.css';
import ghLogo from "../assets/github-logo.png";
import discogsLogo from "../assets/discogs-logo.png";
import { Fade } from 'react-awesome-reveal';

const WebsiteLink =
<table>
  <tr>
    <a href="https://github.com/rawsodium/dt-personal-website" target="_blank" rel="noreferrer"><img src={ghLogo} alt="meaningful text" width="50" height="50"></img></a>
  </tr>
</table>
  
const Website = 
<div className="website">
    <h2><Fade cascade duration="150" triggerOnce>This website | March 2023 - Present (working on updates)</Fade> </h2>
      <h3>React.js, Node.js, HTML, CSS, Spotify Web API</h3>
        <ul>
          <p>
            I consider this website a little corner of the internet where others can get to know me a little better.
            I want to be able to showcase some of the things that I normally don't get to. It's still very much a work in
            progress, but I'm working on rolling out updates. This was built as a way for me to strengthen my web development skills,
            and also to learn how to use React.js. Next on my to-do list for this site is to work with Spotify's API to be
            able to play some of my favorite music through the homepage!
          </p>
        </ul>
    {WebsiteLink}
</div>

const DiscograpyLinks =
  <table>
    <tr>
      <td><a href="https://github.com/rawsodium/discogra.py" target="_blank" rel="noreferrer"><img src={ghLogo} alt="meaningful text" width="50" height="50"></img></a></td>
      <td><a href="https://www.discogs.com/user/deannat/collection" target="_blank" rel="noreferrer"><img src={discogsLogo} alt="meaningful text" width="100" height="50"></img></a></td>
    </tr>
  </table>

const Discograpy = 
<div className="ds-proj">
    <h2><Fade cascade duration="150" triggerOnce>Discogra.py | March 2023 - Present (in progress)</Fade></h2>
      <h3>Python, Jupyter Notebook, numPy, pandas, Matplotlib, seaborn</h3>
        <ul>
          <p>
            This project is a collection of visualizations of my personal record collection. I constructed the datasets for my
            albums and singles using information from Discogs.com, a website I have been using to keep track of my records since
            2020. I used numPy, pandas, Matplotlib, and other Python libraries to break down the datasets and construct graphs charting attributes such as genre, location of manufacture, year of
            pressing, and more. I compiled all of my findings into a Jupyter Notebook file for easy viewing of my work. 
          </p>
        </ul>
      {DiscograpyLinks}
</div>

const ImageProcessor = 
<div className="image-processor">
    <h2><Fade cascade duration="150" triggerOnce>Image Processor | October - November 2022</Fade></h2>
      <h3>Java, JUnit, Swing</h3>
        <ul>
          This project was created for my Object-Oriented Design class (CS3500) at Northeastern University. The task
          was to create an image-processing application using the Model-View-Controller (MVC) architecture and various
          object-oriented design patterns. The application has a GUI built in Swing, and implements support for image
          transformations such as blur, sharpen, filter, flip, load and save. It was created using test-driven development,
          and was tested using the JUnit framework.
        </ul>
    <p>Code available upon request</p>
</div>

const Goose =
<div className="goose">
    <h2><Fade cascade duration="150" triggerOnce>Ms. Fens' Gaggle | February 2022</Fade></h2>
      <h3>Vue.js, TypeScript, JavaScript, HTML</h3>
        <p>Play the game <a href="https://ms-fens-gaggle.netlify.app/" target="_blank" rel="noreferrer">here</a></p>
          <ul>
            This was a game created with a team of five other friends for HackBeanpot 2022. The goal of the game is
            to breed a goose with the best possible combination of traits. I worked on rendering the display of each goose's
            traits, as well as composed some of the background music. This was my first hackathon, and overall a fun learning
            experience!
          </ul>
      <table>
        <tr><p><a href="https://github.com/thederekkaplan/mrs-fens-gaggle" target="_blank" rel="noreferrer"><img src={ghLogo} alt="meaningful text" width="50" height="50"></img></a></p></tr>
      </table>
</div>

const Pad = 
<div className="pad-projects">
</div>

function Projects() {
    return (
        <div className="project-parent">
          {Website}
          {Pad}
          {Pad}
          {Discograpy}
          {ImageProcessor}
          {Pad}
          {Pad}
          {Goose}
        </div>
      );
}

export default Projects;