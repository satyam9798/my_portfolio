import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/satyam-shivam-8b86441ba/">
      <BsLinkedin /></a>
    </div>
    <div>
      <a href="https://github.com/satyam9798"> 
      <BsGithub /></a>
    </div>
    <div>
      <a href="https://instagram.com/satyam_sh1vam?igshid=NTc4MTIwNjQ2YQ==">
      <BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
