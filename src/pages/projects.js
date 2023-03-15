import React from 'react';
import './projects.css';
import Fade from 'react-reveal/Fade';
import ghLogo from "../assets/github-logo.png";
import discogsLogo from "../assets/discogs-logo.png";

const WebsiteLink =
<div class="links-project">
  <Fade left>
    <a href="https://github.com/rawsodium/dt-personal-website" target="_blank"><img src={ghLogo} width="50" height="50"></img></a>
  </Fade>
</div>

const Website = 
<div class="website">
  <Fade left>
    <h2>This website | March 2023 - Present (working on updates)</h2>
      <h3>React.js, Node.js, HTML, CSS, JavaScript, Spotify Web API</h3>
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
  </Fade>
</div>

const DiscograpyLinks =
<div class="links">
  <a href="https://github.com/rawsodium/discogra.py" target="_blank"><img src={ghLogo} width="50" height="50"></img></a> 
  <a href="https://www.discogs.com/user/deannat/collection" target="_blank"><img src={discogsLogo} width="100" height="50"></img></a>
</div>

const Discograpy = 
<div class="ds-proj">
  <Fade right>
    <h2> Discogra.py | March 2023 - Present (in progress)</h2>
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
  </Fade>
</div>

const ImageProcessor = 
<div class="image-processor">
  <Fade left>
    <h2>Image Processor | October - December 2022</h2>
      <h3>Java, JUnit, Swing</h3>
        <ul>
          This project was created for my Object-Oriented Design class (CS3500) at Northeastern University. The task
          was to create an image-processing application using the Model-View-Controller (MVC) architecture and various
          object-oriented design patterns. The application has a GUI built in Swing, and implements support for image
          transformations such as blur, sharpen, filter, flip, load and save. It was created using test-driven development,
          and was tested using the JUnit framework.
        </ul>
    <p>Code available upon request</p>
  </Fade>
</div>

const Goose =
<div class="goose">
  <Fade right>
    <h2>Ms. Fens' Gaggle | February 2022</h2>
      <h3>Vue.js, TypeScript, JavaScript, HTML</h3>
        <p>Play the game <a href="https://ms-fens-gaggle.netlify.app/" target="_blank">here</a></p>
          <ul>
            This was a game created with a team of five other friends for HackBeanpot 2022. The goal of the game is
            to breed a goose with the best possible combination of traits. I worked on rendering the display of each goose's
            traits, as well as composed some of the background music. This was my first hackathon, and overall a fun learning
            experience!
          </ul>
      <p><a href="https://github.com/thederekkaplan/mrs-fens-gaggle" target="_blank"><img src={ghLogo} width="50" height="50"></img></a></p>
  </Fade>
</div>

const Pad = 
<div>
</div>

/*
      <div class="project-child-music">
        <h1>Music projects that I've worked on!</h1>
          <h2>Songs that I've served as an engineer on:</h2>
            <ul>
              <li>"Ant" - Main Era (2023)</li>
              <li>"Chrysanthemums" - Clifford the Band (2023)</li>
            </ul>
      </div>
*/
/*
          <li>Deployed the website using React and Node</li>
          <li>Integrated a web player using Spotify's Web API to play background music</li>

          <li>Construct a dataset using my record collection, cataloged on Discogs.com</li>
          <li>Visaulize my collection based on attributes such as genre, location of pressing, and year of pressing</li>
          <li>Create separate analyses for full albums and singles</li>

          <li>Designed an image processing program according to object-oriented design principles</li>
          <li>Implemented support for blur, sharpen, filter, flip, load and save operations</li>
          <li>Utilized test-driven development through use of the JUnit testing framework</li>

                      <li>Created a game where players aim to breed a goose with a combination of the best possible traits</li>
            <li>Rendered display of each goose’s traits, and composed background music</li>
            <li>Worked on a team with 5 others and submitted the project as a part of HackBeanpot 2022</li>
*/


const Projects = () => {
  return (
    <div class="project-parent">
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
};

export default Projects;