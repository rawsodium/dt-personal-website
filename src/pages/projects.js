import React from 'react';
import './projects.css';
import { ProjectType } from '.';

/*
const Website = {
  name: "This website",
  description: "This website was created so others can get to know me a little better. I've put my personal coding projects on here, as well as some music that I work on.",
  technologies: "React.js, JavaScript, TypeScript, HTML, CSS, Spotify Web API",
  codeLink: <a href="https://github.com/rawsodium/dt-personal-website" target="_blank">Code</a>,
  start: "March 2023",
  end: "Present",
  type: "PROJECT",
};

const Discograpy = {
  name: "Discogra.py",
  description: "A collection of data visualizations and statistical analyses done on my personal record collection. I pulled the data on each entry from Discogs.com, where I had cataloged my record collection.",
  technologies: "Python, Jupyter Notebook, numPy, pandas, Matplotlib, seaborn",
  codeLink: <a href="https://github.com/rawsodium/discogra.py" target="_blank">Code</a>,
  start: "March 2023",
  end: "Present",
  type: "PROJECT",
};

const ImageProcessor = {
  name: "Image Processor",
  description: "This was a project for my Object-Oriented Design class. We were tasked with creating an image editing application according to object-oriented design principles.",
  technologies: "Java, Swing, JUnit",
  start: "October 2022",
  end: "December 2022",
  type: "PROJECT",
};

const Goose = {
  name: "Ms. Fens' Gaggle",
  description: "A fun goose-breeding game created by myself and a team of 5 others for HackBeanpot 2022.",
  technologies: "Vue.js, JavaScript, TypeScript, HTML",
  start: "February 2022",
  end: "February 2022",
  type: "PROJECT",
};
*/

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

/*
const Projects = () => {
  return (
    Website, Discograpy, ImageProcessor, Goose
  );
};*/

export default Projects;