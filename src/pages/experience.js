import React from 'react'
import '../styles/experience.css'
import { Fade } from 'react-awesome-reveal';

const Extracurriculars =
<div>
    <h1><Fade cascade duration="250" triggerOnce>Extracurriculars</Fade></h1>
    <Fade direction="up" triggerOnce>
    <p>Throughout my time at Northeastern, I've participated in my fair share of activities and held several leadership positions.</p>
        <ul>
            <li>Audio Engineer, Green Line Records Recording Department (September 2021 - May 2025)</li>
            <li>Violinist, Northeastern University Symphony Orchestra (January 2023 - Present)</li>
            <li>Bass Guitarist, NUStage Musical Theatre Company Pit Orchestra (September 2024 - May 2025)</li>
            <li>Electric Guitarist, Northeastern University Pep Band (September 2025 - Present)</li>
            <li>President/Webmaster, NUHacks (September 2023 - May 2025)</li>
            <li>Workshop Coordinator/Director, NUSound (January 2024 - Present)</li>
            <li>Member, Northeastern University Association of Gaming Enthusiasts (NUAGE) (September 2021 - May 2025)</li>
        </ul>
    </Fade>
</div>
const Classes =
<div>
    <h1><Fade cascade duration="250" triggerOnce>Relevant Coursework</Fade></h1>
        <Fade direction="up" triggerOnce>
        <p>An exhaustive list of courses I've taken during my time at Northeastern.</p>
        <b>Graduate:</b>
        <ul>
            <li>CS 5520 - Mobile Application Development</li>
            <li>CS 6620 - Fundamentals of Cloud Computing</li>
        </ul>
        <b>Undergraduate:</b>
        <ul>
            <li>CS 1800 - Discrete Structures</li>
            <li>CS 2500 - Fundamentals of Computer Science 1</li>
            <li>CS 2510 - Fundamentals of Computer Science 2</li>
            <li>CS 3500 - Object-Oriented Design</li>
            <li>CS 3650 - Computer Systems</li>
            <li>CS 5200 - Database Management Systems (Graduate Level)</li>
            <li>CS 5340 - Computer/Human Interaction (Graduate Level)</li>
            <li>CS 5500 - Foundations of Software Engineering (Graduate Level)</li>
            <li>CS 5800 - Algorithms (Graduate Level)</li>
            <li>CY 2550 - Foundations of Cybersecurity</li>
            <li>MUST 1220 - Introduction to Music Technology</li>
            <li>MUST 2102 - Composing with Digital Technologies</li>
            <li>MUST 2431 - Computer Music Fundamentals</li>
            <li>MUST 3603 - Embedded Audio Programming</li>
            <li>MUST 4610 - Composition for Electronic Instruments</li>
            <li>MUST 4611 - Music Technology Capstone</li>
            <li>MUSC 1001 - Music in Everyday Life</li>
            <li>MUSC 1119 - Fundamentals of Western Music Theory</li>
            <li>MUSC 1201 - Music Theory 1</li>
            <li>MUSC 1202 - Music Theory 2</li>
            <li>MUSC 2101 - Black Popular Music</li>
            <li>MUSC 2350 - Acoustics and Psychoacoustics of Music</li>
            <li>MUSC 3300 - Music Perception and Cognition</li>
            <li>MUSI 2232 - Music Recording 1</li>
            <li>MUSI 2331 - Music Production and Recording 2</li>
            <li>MUSI 3341 - Music Production and Recording 3 - Mixing and Mastering</li>
            <li>ENGW 3302 - Advanced Writing in the Technical Professions</li>
            <li>PSYC 1101 - Foundations of Psychology</li>
            <li>PHIL 1145 - Technology and Human Values</li>
        </ul>
    </Fade>
</div>

const Technical =
<div className="exp-child-technical">
    <h1><Fade cascade duration="250" triggerOnce>Technical Knowledge</Fade></h1>
        <Fade direction="down" triggerOnce>
            <h2>Languages</h2>
                <p>JavaScript (Vue/React/Node), Python, C++, Java, Bash, C, SQL (MySQL), TypeScript, Swift, Racket/Lisp </p>
            <h2>Frameworks/Tools</h2>
                <p>Git, Docker, Elasticsearch, MongoDB, JUCE, OpenShift, Kubernetes, AWS, LangChain, MaxMSP, Vim, JUnit, Logic Pro, Pro Tools, Jest</p>
            <h2>Libraries</h2>
                <p>numPy | pandas | Matplotlib | seaborn</p>
            <h2>Systems</h2>
                <p>macOS X, Linux, Windows</p>
    </Fade>
    {Extracurriculars}
    {Classes}
</div>

const Baseball = 
<div>
<h2>Student Manager</h2>
    <h3>Northeastern University Baseball Team | September 2025 - Present</h3>
        <p>
            Currently, I volunteer as a student manager for Northeastern's baseball team. I'm at nearly all practices every week, where
            I help set up necessary technology and help collect team data for analytics. This means filming during batting practice or manning
            Yakkertech to keep track of our hitters' exit velocities during batting practice. During scrimmages, I help keep track of every pitch,
            including the velocity, result (ball/strike), contact type, and whether an out was recorded or a man reached base.
        </p>
</div>

const MITRE =
<div>
<h2>Software Engineering Co-op</h2>
    <h3>MITRE Corporation | June - December 2023; May 2024 - May 2025</h3>
        <p>
            I worked on a team of approximately 10 people in an Agile environment.
            During my time as a co-op, I gained experience working on both the frontend (Vue)
            and the backend (Node APIs, Python ETL pipelines) of our applications. I worked on updating and maintaining 4
            company wide web apps throughout my time.
            <br></br>
            <br></br>
            During my first co-op at MITRE, for one of these apps, I wrote and debugged Python and shell scripts to update our ETL pipelines and
            pull in new data from Denodo and Salesforce to support multiple large releases. For the same app, I ensured that the project 
            was delivered on schedule by also taking on the frontend development work. I also extended an existing API to support project data from Clarity.
            <br></br>
            <br></br>
            During my second co-op at MITRE, I focused mostly on building RAG chatbots in LangChain, as well as helping migrate our apps to
            the OpenShift cloud platform. I architected and built two MVC chatbots using LangChain, enabling users to chat with data indexes 
            in Elastic and Azure. I deployed prototypes to OpenShift, allowing users to begin end-to-end testing as soon as possible. I also migrated 
            a Java API running on Apache Tomcat to OpenShift to save thousands of dollars in on-prem costs, writing Kubernetes manifests for configuration and resource allocation.
            I also provided other developers on my team with key lessons learned from this migration for future Java app migrations. 
            <br></br>
            <br></br>
            I worked as a full-time co-op from June - December 2023 and May - August 2024, and then worked part time during classes from September 2024 - May 2025.
        </p>
        <p>
            Relevant skills/technologies: Vue, Node, JavaScript, Python, Bash, Linux, Elasticsearch, Docker, Git, LangChain, OpenShift, Kubernetes, Apache Tomcat, Cloud Migration
        </p>
</div>

const Ta = 
<div className="ta">
<h2>Teaching Assistant, Fundamentals of CS 1 (CS2500)</h2>
    <h3>Khoury College of Computer Sciences | September 2022 - May 2023</h3>
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
        <h3>Green Line Records | September 2021 - May 2025</h3>
            <p> Green Line Records is Northeastern's student-run record label. We sign local artists, record, promote and distribute their music.
                My responsibilities as a recording engineer include helping set up microphones and ensuring proper signal flow during recording sessions.
                <br></br>
                <br></br>
                I have served as an engineer on the following songs:
                <ul>
                    <li><a href="https://open.spotify.com/track/16abgjDt7CPNnrsZH1Sysg?si=ea2009aabf114025" target="_blank" rel="noreferrer">Brown Out</a> by Breakfast Beers (2024)</li>
                    <li><a href="https://open.spotify.com/track/0bpxHsU2yfgSBzBvtbJ9g3?si=470dd9a7077140d4" target="_blank" rel="noreferrer">Ant</a> by Main Era (2023)</li>
                    <li><a href="https://open.spotify.com/track/5jC7K0pIhcjY47TOhgCEu7?si=5710aaa783444684" target="_blank" rel="noreferrer">Chrysanthemums</a> by Clifford the Band (2023)</li>
                    <li>Twist the Knife by Girlband, which was scrapped and therefore not released, but I took over lead engineer and mixing duties</li>
                </ul> 
                I also have some experience recording live sound through helping record the presentations for
                MUST 4611 (Music Technology Senior Capstone/Recital) at Northeastern in April 2022.
            </p>
</div>

const Work = 
<div className="exp-child-work">
    <h1><Fade cascade duration="250" triggerOnce>Work Experience</Fade></h1>
            <Fade direction="down" triggerOnce>
            {Baseball}
            </Fade>
            <Fade direction="down" triggerOnce>
            {MITRE}
            </Fade>
            <Fade direction="down" triggerOnce>
            {Ta}
            </Fade>
            <Fade direction="down" triggerOnce>
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
