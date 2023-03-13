import React from 'react';
import ghLogo from "../assets/github-logo.png";
import "./contact.css";

const Header =
<div>
  <h1>Contact me!</h1>
</div>

const LinkedIn =
  <div class="child">
    <a href="https://www.linkedin.com/in/deanna-turner04/" target="_blank"></a>
  </div>

const Resume =
  <div class="child">
    <p><a href="./public/DeannaTurner.pdf" download>Resume</a></p>
  </div>

const GitHub =
  <div class="child">
    <a href="https://github.com/rawsodium" target="_blank"><img src={ghLogo} width="50" height="50"></img></a>
  </div>

const Contact = () => {
  return (
    <div class="parent">
      {Header}
        <div class="links">
          {LinkedIn}
          {Resume}
          {GitHub}
        </div>
    </div>
  );
};
  
export default Contact;