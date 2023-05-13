import React from "react";
import me from "../imgs/me.JPEG";


function About(){

return(

    <div>

    <p className="content is-medium">Up and coming Developer</p>

    <img className="profile-pic" src= {me} alt="Tyler Cash"/>
    <p className="content mt-5">
        
    Hi there! My name is Tyler and I'm about to graduate from UNC Chapel Hill's Coding Bootcamp as
    a Full Stack web developer. The experience has given me everything that is needed of today's software developers. 
    
    </p>

    <p className="content">
    
    </p>
    </div>
);
}

export default About;