import React from 'react';
import './projects.css';
  
const Projects = () => {
  return (
    <div class="project-parent">
      <div class="project-child-coding">
        <h1>Coding projects that I've worked on!</h1>
        <div class="website">
          <h2>This website | March 2023 - Present </h2>
            <h3>React.js, Node.js, HTML, CSS, JavaScript, Spotify Web API</h3>
              <ul>
                <li>Deployed the website using React and Node</li>
                <li>Integrated a web player using Spotify's Web API to play background music</li>
              </ul>
        </div>
        <div class="ds-proj">
          <h2> Discogra.py | March 2023 - Present (in development)</h2>
            <h3>Python, numPy, pandas, Matplotlib</h3>
              <ul>
                <li>Construct a dataset using my record collection, cataloged on Discogs.com</li>
                <li>Visaulize my collection based on attributes such as genre, location of pressing, and year of pressing</li>
                <li>Create separate analyses for full albums and singles</li>
              </ul>
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
              <p> See the code <a href="https://github.com/thederekkaplan/mrs-fens-gaggle" target="_blank">here</a></p>
        </div>
      </div>
      <div class="project-child-music">
        <h1>Music projects that I've worked on!</h1>
          <h2>Songs that I've served as an engineer on:</h2>
            <ul>
              <li>"Ant" - Main Era (2023)</li>
              <li>"Chrysanthemums" - Clifford the Band (2023)</li>
            </ul>
      </div>
    </div>
  );
};
  
export default Projects;