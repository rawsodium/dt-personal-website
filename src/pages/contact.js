import React from 'react';
import ghLogo from "../assets/github-logo.png";

const LinkedIn =
  <div>
    <a href="https://www.linkedin.com/in/deanna-turner04/" target="_blank"></a>
  </div>

const Resume =
  <div>
    <a href="./public/DeannaTurner.pdf" download>Resume</a>
  </div>

const GitHub =
  <div>
    <a href="https://github.com/rawsodium" target="_blank"><img src={ghLogo} width="50" height="50"></img></a>
  </div>

const Contact = () => {
  return (
    <div>
      <h1>Contact me!</h1>
      {LinkedIn}
      {Resume}
      {GitHub}
    </div>
  );
};
  
export default Contact;