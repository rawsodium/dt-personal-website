import React from 'react';
  
const Projects = () => {
  return (
    <div>
      <h1>Coding projects that I've worked on!</h1>
      <h2>This website | March 2023 - Present </h2>
        <h3>React.js, Node.js, HTML, CSS, JavaScript</h3>
          <ul>
            <li>Deployed the website using React and Node</li>
            <li>Integrated a web player using Spotify's API to play background music</li>
          </ul>
      <h2>Image Processor | October - December 2022</h2>
        <h3>Java, JUnit, Swing</h3>
        <ul>
          <li>Designed an image processing program according to object-oriented design principles</li>
          <li>Implemented support for blur, sharpen, filter, flip, load and save operations</li>
          <li>Utilized test-driven development through use of the JUnit testing framework</li>
          <p>Code available upon request</p>
        </ul>
      <h2>Ms. Fens' Gaggle | February 2022</h2>
        <h3>Vue.js, TypeScript, JavaScript, HTML</h3>
        <p> 
          Play the game <a href="https://ms-fens-gaggle.netlify.app/" target="_blank">here</a>
        </p>
        <ul>
          <li>Created a game where players aim to breed a goose with a combination of the best possible traits</li>
          <li>Rendered display of each goose’s traits, and composed background music</li>
          <li>Worked on a team with 5 others and submitted the project as a part of HackBeanpot 2022</li>
        </ul>
        <p> 
          See the code <a href="https://github.com/thederekkaplan/mrs-fens-gaggle" target="_blank">here</a>
          </p>
      <h1>Music projects that I've worked on!</h1>
      <h2>Songs that I've served as an engineer on:</h2>
      <ul>
        <li>"Ant" - Main Era (2023)</li>
        <li>"Chrysanthemums" - Clifford the Band (2023)</li>
      </ul>
    </div>
  );
};
  
export default Projects;