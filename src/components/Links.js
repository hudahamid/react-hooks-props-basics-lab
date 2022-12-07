import React from "react";

function Links(prob) { 
  return (
    <div id="links">
      
    
      <h3>Links</h3>
      <a href={prob .github}>{prob.github}</a>
      <a href={prob.linkedin}>{prob.linkedin}</a>
    </div>
  );
}
export default Links;