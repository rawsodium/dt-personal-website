import React from 'react';
import './projects.css';
import Fade from 'react-reveal/Fade';
import ghLogo from "../assets/github-logo.png";
import discogsLogo from "../assets/discogs-logo.png";

const Website = 
<div class="website">
  <Fade left>
    <h2>This website | March 2023 - Present (currently working on updates)</h2>
      <h3>React.js, Node.js, HTML, CSS, JavaScript, Spotify Web API</h3>
        <ul>
          <li>Deployed the website using React and Node</li>
          <li>Integrated a web player using Spotify's Web API to play background music</li>
        </ul>
    <p><a href="https://github.com/rawsodium/dt-personal-website" target="_blank"><img src={ghLogo} width="50" height="50"></img></a></p>
  </Fade>
</div>

const Discograpy = 
<div class="ds-proj">
  <Fade right>
    <h2> Discogra.py | March 2023 - Present (in progress)</h2>
      <h3>Python, Jupyter Notebook, numPy, pandas, Matplotlib, seaborn</h3>
        <ul>
          <li>Construct a dataset using my record collection, cataloged on Discogs.com</li>
          <li>Visaulize my collection based on attributes such as genre, location of pressing, and year of pressing</li>
          <li>Create separate analyses for full albums and singles</li>
        </ul>
    <div>
      <a href="https://github.com/rawsodium/discogra.py" target="_blank"><img src={ghLogo} width="50" height="50"></img></a> 
      <a href="https://www.discogs.com/user/deannat/collection" target="_blank"><img src={discogsLogo} width="100" height="50"></img></a>
    </div>
  </Fade>
</div>

const ImageProcessor = 
<div class="image-processor">
  <Fade left>
    <h2>Image Processor | October - December 2022</h2>
      <h3>Java, JUnit, Swing</h3>
        <ul>
          <li>Designed an image processing program according to object-oriented design principles</li>
          <li>Implemented support for blur, sharpen, filter, flip, load and save operations</li>
          <li>Utilized test-driven development through use of the JUnit testing framework</li>
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
            <li>Created a game where players aim to breed a goose with a combination of the best possible traits</li>
            <li>Rendered display of each goose’s traits, and composed background music</li>
            <li>Worked on a team with 5 others and submitted the project as a part of HackBeanpot 2022</li>
          </ul>
      <p><a href="https://github.com/thederekkaplan/mrs-fens-gaggle" target="_blank"><img src={ghLogo} width="50" height="50"></img></a></p>
  </Fade>
</div>

const Pad = 
<div>
</div>
/*
const Projects = () => {
  return (
    <div class="project-parent">
      <div class="project-child-coding">
        <h1>Coding projects that I've worked on!</h1>
        <div class="website">
          <h2>This website | March 2023 - Present (currently working on updates)</h2>
            <h3>React.js, Node.js, HTML, CSS, JavaScript, Spotify Web API</h3>
              <ul>
                <li>Deployed the website using React and Node</li>
                <li>Integrated a web player using Spotify's Web API to play background music</li>
              </ul>
            <p><a href="https://github.com/rawsodium/dt-personal-website" target="_blank">Code</a></p>
        </div>
        <div class="ds-proj">
          <h2> Discogra.py | March 2023 - Present (in progress)</h2>
            <h3>Python, Jupyter Notebook, numPy, pandas, Matplotlib, seaborn</h3>
              <ul>
                <li>Construct a dataset using my record collection, cataloged on Discogs.com</li>
                <li>Visaulize my collection based on attributes such as genre, location of pressing, and year of pressing</li>
                <li>Create separate analyses for full albums and singles</li>
              </ul>
            <p><a href="https://github.com/rawsodium/discogra.py" target="_blank">Code</a></p>
        </div>
        <div class="image-processor">
          <h2>Image Processor | October - December 2022</h2>
            <h3>Java, JUnit, Swing</h3>
              <ul>
                <li>Designed an image processing program according to object-oriented design principles</li>
                <li>Implemented support for blur, sharpen, filter, flip, load and save operations</li>
                <li>Utilized test-driven development through use of the JUnit testing framework</li>
              </ul>
            <p>Code available upon request</p>
        </div>
        <div class="goose">
          <h2>Ms. Fens' Gaggle | February 2022</h2>
            <h3>Vue.js, TypeScript, JavaScript, HTML</h3>
              <p>Play the game <a href="https://ms-fens-gaggle.netlify.app/" target="_blank">here</a></p>
              <ul>
                <li>Created a game where players aim to breed a goose with a combination of the best possible traits</li>
                <li>Rendered display of each goose’s traits, and composed background music</li>
                <li>Worked on a team with 5 others and submitted the project as a part of HackBeanpot 2022</li>
              </ul>
              <p><a href="https://github.com/thederekkaplan/mrs-fens-gaggle" target="_blank">Code</a></p>
        </div>
      </div>
    </div>
  );
};
*/

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