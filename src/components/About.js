import React from "react";
import Links from "./Links";
import user from "../data/user";

function About({bio}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      
      {bio ? <p>{bio}</p> : ""}      

     
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
       

      {/* add your <Links /> component here */}

      <Links  linkedin={user.links.linkedin}   github={user.links.github}   />
    </div>
  );
}

export default About;
