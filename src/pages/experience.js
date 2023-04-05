import React from 'react'
import '../styles/experience.css'
import { Fade } from 'react-awesome-reveal';

const Classes =
<div>
    <h1><Fade cascade duration="250" triggerOnce>Relevant Coursework</Fade></h1>
        <Fade direction="up" triggerOnce>
        <p>An exhaustive list of courses I've taken during my time at Northeastern.</p>
        <ul>
            <li>CS 1800 - Discrete Structures</li>
            <li>CS 2500 - Fundamentals of Computer Science 1</li>
            <li>CS 2510 - Fundamentals of Computer Science 2</li>
            <li>CS 3500 - Object-Oriented Design</li>
            <li>CS 5800 - Algorithms (Graduate Level)</li>
            <li>CY 2550 - Foundations of Cybersecurity</li>
            <li>MUST 1220 - Introduction to Music Technology</li>
            <li>MUST 2102 - Composing with Digital Technologies</li>
            <li>MUST 2431 - Computer Music Fundamentals</li>
            <li>MUSC 1001 - Music in Everyday Life</li>
            <li>MUSC 1119 - Fundamentals of Western Music Theory</li>
            <li>MUSC 1201 - Music Theory 1</li>
            <li>MUSC 2101 - Black Popular Music</li>
            <li>MUSC 2350 - Acoustics and Psychoacoustics of Music</li>
            <li>MUSC 3300 - Music Perception and Cognition</li>
        </ul>
    </Fade>
</div>

const Technical =
<div className="exp-child-technical">
    <h1><Fade cascade duration="250" triggerOnce>Technical Knowledge</Fade></h1>
        <Fade direction="down" triggerOnce>
            <h2>Languages</h2>
                <p>Java | Python | C++ | HTML/CSS | JavaScript | Racket/Lisp </p>
            <h2>Frameworks/Tools</h2>
                <p>React.js | Node.js | JUnit | VS Code | IntelliJ IDEA | PyCharm | Eclipse | Vim | Bash/zsh | GitHub | MaxMSP | Logic Pro | Pro Tools</p>
            <h2>Libraries</h2>
                <p>numPy | pandas | Matplotlib | seaborn</p>
            <h2>Systems</h2>
                <p>macOS X | Linux (Ubuntu) | Windows Legacy</p>
    </Fade>
</div>

const Ta = 
<div className="ta">
<h2>Teaching Assistant, Fundamentals of Computer Science 1 (CS2500)</h2>
    <h3>Khoury College of Computer Sciences | September 2022 - Present</h3>
        <p>
            As a teaching assistant, my responsibilities include hosting weekly office hours to give one-on-one help
            to students, running a weekly lab to help reinforce course content for students, and grading assignments.
            Not only has this experience helped me improve my interpersonal communication and leadership skills, it has also
            helped reinforce my own knowledge on the course content.
        </p>
</div>

const Glr = 
<div className="glr">
    <h2>Recording Engineer</h2>
        <h3>Green Line Records | September 2021 - Present</h3>
            <p> Green Line Records is Northeastern's student-run record label. We sign local artists, record, promote and distribute their music.
                My responsibilities as a recording engineer include helping set up microphones and ensuring proper signal flow during recording sessions.
                <br></br>
                <br></br>
                Most recently, I served as an assistant engineer to help Main Era record their upcoming song "Ant". Other songs
                which I have served as an engineer for include <a href="https://open.spotify.com/track/5jC7K0pIhcjY47TOhgCEu7?si=5710aaa783444684" target="_blank" rel="noreferrer">"Chrysanthemums"</a> by Clifford the Band, a project which I served as an
                engineer-in-training on. I also have some experience recording live sound through helping record the presentations for
                MUST 4611 (Music Technology Senior Capstone/Recital) at Northeastern in April 2022.
            </p>
</div>

const Work = 
<div className="exp-child-work">
    <h1><Fade cascade duration="250" triggerOnce>Work Experience</Fade></h1>
            <Fade direction="down" triggerOnce>
            {Ta}
            </Fade>
            <Fade direction="up" triggerOnce>
            {Glr}
            </Fade>
</div>

function Experience () {
    return (
        <div className="exp-parent">
            {Technical}
            {Work}
        </div>
    );
}

export default Experience;