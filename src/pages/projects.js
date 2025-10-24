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

const CapstoneLinks =
<table>
  <tr>
    <td><a href="https://github.com/rawsodium/tSaturator" target="_blank" rel="noreferrer"><img src={ghLogo} alt="github logo" width="50" height="50"></img></a></td>
    <td>Read the paper <a href="../../public/DTurnerCapstonePaper.pdf" target="blank" rel="noreferrer">here</a></td>
  </tr>
</table>

const Capstone = 
<div className="small-proj">
    <h2><Fade cascade duration="150" triggerOnce>tSaturator | February - April 2025 </Fade></h2>
      <h3>C++, JUCE Framework</h3>
      <ul>
        <p>
          tSaturator (pronounced as saturator) is a tape saturation audio plugin built with C++ and the JUCE framework. 
          It mimics harmonic distortion and noise from vintage tape machines. tSaturator allows for controlling the amount of saturation, 
          the drive, and the wet/dry mix of the signal, as well as the amount of noise (or hiss) mixed in with the affected signal. 
          There is also a spectrum analyzer, allowing users to see what the frequency spectrum looks like post-processing. 
          It works as both as VST and an AU, meaning it can be used across a variety of digital audio workstations to add some more character to audio.
          This was my capstone project for my degree.
        </p>
      </ul>
      {CapstoneLinks}
</div>

const PingPongDelay =
<div className="small-proj">
    <h2><Fade cascade duration="150" triggerOnce>Ping-Pong Delay Pedal | March - April 2024 </Fade></h2>
    <h3>C++, Bela, Breadboard Circuit</h3>
      <ul>
        <p>
          This was the final project for my Embedded Audio Programming (MUST3603) class. We developed a real-time ping-pong delay in C++ using the Bela board.
          We designed and built circuit with trimmers to control feedback, wet/dry mix, volume and gain, and implemented a low pass filter to control excess 
          noise from the circuit’s trimmers. This was my first experience working with embedded real-time audio processing. 
        </p>
      </ul>
      <table>
        <tr><p><a href="https://github.com/rawsodium/ping-pong-delay" target="_blank" rel="noreferrer"><img src={ghLogo} alt="meaningful text" width="50" height="50"></img></a></p></tr>
      </table>
</div>

const RoomBooker =
<div className="small-proj">
  <h2><Fade cascade duration="150" triggerOnce>Room Booker | March - April 2024 </Fade></h2>
    <h3>Python, MySQL</h3>
      <ul>
        <p>
          This was the final project for my Database Management Systems (CS5200) class. It uses pymysql to interface with MySQL in order to create
          a rudimentary mock room booking application for Northeastern classrooms with user authentication. 
        </p>
      </ul>
      <table>
        <tr><p><a href="https://github.com/rawsodium/CS5200-Final-Project" target="_blank" rel="noreferrer"><img src={ghLogo} alt="meaningful text" width="50" height="50"></img></a></p></tr>
      </table>
</div>

const ChatServer =
<div className="small-proj">
    <h2><Fade cascade duration="150" triggerOnce>Chat Server | April 2024 </Fade></h2>
      <h3>C</h3>
        <ul>
        <p>
          A simple chat server using socket programming for my Computer Systems class (CS3650).
        </p>
      </ul>
</div>

const FileSystem =
<div className="small-proj">
    <h2><Fade cascade duration="150" triggerOnce>Read-Only File System | March 2024 </Fade></h2>
      <h3>C</h3>
        <ul>
        <p>
          A simple read-only file system for my Computer Systems class (CS3650). 
        </p>
      </ul>
</div>

const BasicShell =
<div className="small-proj">
    <h2><Fade cascade duration="150" triggerOnce>Basic Shell | February 2024 </Fade></h2>
      <h3>C</h3>
        <ul>
        <p>
          A simple UNIX-style shell for my Computer Systems class (CS3650). It supports commands like cd, pwd, exit, executables, and file input/output redirection.
        </p>
      </ul>
</div>


const Website = 
<div className="small-proj">
    <h2><Fade cascade duration="150" triggerOnce>This website | March 2023 - Present (working on updates)</Fade> </h2>
      <h3>React, Node</h3>
        <ul>
          <p>
            I consider this website a little corner of the internet where others can get to know me a little better.
            I want to be able to showcase some of the things that I normally don't get to. It's still very much a work in
            progress, but I'm working on rolling out updates. This was built as a way for me to strengthen my web development skills,
            and also to learn how to use React. Next on my to-do list for this site is to work with Spotify's API to be
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
<div className="small-proj">
    <h2><Fade cascade duration="150" triggerOnce>Discogra.py | March 2023</Fade></h2>
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
<div className="small-proj">
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
<div className="small-proj">
    <h2><Fade cascade duration="150" triggerOnce>Ms. Fens' Gaggle | February 2022</Fade></h2>
      <h3>Vue, TypeScript</h3>
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

const NextProjects = 
<div className="small-proj">
    <h3>MusicBox | Swift, Apple Music API</h3>
      <p>A project I'm working on for my Mobile Application Development (CS5520) class. Think of it as Letterboxd/Goodreads for rating albums.</p>
    <h3>MBTA Closure Map | Vue, Node, MBTA API, Postgres, vis.js</h3>
      <p>I got the idea for this after the few large Green Line closures in 2023. I wanted a better way to see the entire MBTA subway map 
        and be able to spot where the closures are, instead of corroborating information through various sources. I'm still working on
        architecting the data flow, but the general plan is to grab data from MBTA's public API, clean it up, store it in Postgres as a series of
        nodes and edges and refreshes every 12-24 hours or so. The map will be done with vis.js, which </p>
    <h3>Baseball Rivalries | Python (pybaseball)</h3>
      <p>I wanted to use the pybaseball package to construct a little analysis on the stats behind rivalries in the MLB (I will likely focus on the NL East, 
         but maybe I'll expand the scope.</p>
    <h3>Win Whamageddon | Python, Spotify API</h3>
      <p>A small idea I had after losing Whamageddon for many years in a row. It's a simple python script that removes Wham!'s "Last Christmas" from a user's playlists.</p>
</div>

const Pad = 
<div className="pad-projects">
</div>

function Projects() {
    return (
        <div className="project-parent">
          {NextProjects}
          {Capstone}
          {PingPongDelay}
          {RoomBooker}
          {ChatServer}
          {FileSystem}
          {BasicShell}
          {Website}
          {Discograpy}
          {ImageProcessor}
          {Goose}
        </div>
      );
}

export default Projects;
