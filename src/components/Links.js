import React from "react";

function Links({ linkedin, github }) { 
  return (
    <div id="links">
      
    
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}
export default Links;