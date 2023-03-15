import React from 'react'
import './experience.css'
import Fade from 'react-reveal/Fade';

const Technical =
<div className="exp-child-technical">
    <Fade down>
        <h1>Technical Knowledge</h1>
            <h2>Languages</h2>
                <p>Java | Python | C++ | HTML/CSS | JavaScript | Racket/Lisp </p>
            <h2>Frameworks/Tools</h2>
                <p>React.js | Node.js | JUnit | IntelliJ IDEA | PyCharm | Eclipse | Vim | Bash/zsh | GitHub | MaxMSP | Logic Pro | Pro Tools</p>
            <h2>Libraries</h2>
                <p>numPy | pandas | Matplotlib | seaborn</p>
            <h2>Systems</h2>
                <p>macOS X | Linux (Ubuntu) | Windows Legacy</p>
    </Fade>
</div>

const Ta = 
<div class="ta">
<h2>Teaching Assistant, Fundamentals of Computer Science 1 (CS2500)</h2>
    <h3>Khoury College of Computer Sciences | September 2022 - Present</h3>
        <ul>
            <li>Hold weekly office hours for 700+ students to provide support on course topics and assignments</li>
            <li>Host a weekly lab for 30+ students to solidify understanding of programming design principles</li>
            <li>Grade and provide constructive feedback on 15 homework and lab assignments per week</li>
        </ul>
</div>

const Glr = 
<div class="glr">
    <h2>Recording Engineer</h2>
        <h3>Green Line Records | September 2021 - Present</h3>
            <p> Green Line Records is Northeastern's student-run record label. We sign local artists, record, promote and distribute their music.
                My responsibilities as a recording engineer include helping set up microphones and ensuring proper signal flow during recoring sessions.</p>
                <ul>
                    <li>Serve as an assistant engineer to record the song "Ant" with Main Era</li>
                    <li>Served as an engineer-in-training to record the song "Chrysanthemums" with Clifford the Band</li>
                    <li>Recorded audio of presentations for Music Technology Capstone class in April 2022</li>
                </ul>
</div>

const Work = 
<div class="exp-child-work">
    <Fade up>
        <h1>Work Experience</h1>
        {Ta}
        {Glr}
    </Fade>
</div>

const Experience = () => {
    return (
        <div className="exp-parent">
            {Technical}
            {Work}
        </div>
    );
};

export default Experience;