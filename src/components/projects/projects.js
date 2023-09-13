import React from "react";
import "./projects.css";
import Portfolio1 from "../../assets/perfect-fit.png";
import Portfolio2 from "../../assets/simon.png";
import Portfolio3 from "../../assets/meme-parlor.png";
import Portfolio4 from "../../assets/who-picks.png";


const projects= ()=>{
    return (
        <section id="projects">
            <h2 className="projects-title">My Projects</h2>
            <span className="projects-desc">I strive to build original projects with a plethora of purposes.<br/>These projects are used by friends, family and more.<br/> Thank you all, for your helping me improve my creations!</span>
            <div className="projects-imgs">
                <a href="https://xchen601.github.io/Fashion-App/" target="_blank" rel="noreferrer" ><img src={Portfolio1} className="projects-img" alt="perfect fit project"/></a>
                <a href="saliftankoano.github.io/simon-game/" target="_blank" rel="noreferrer" ><img src={Portfolio2} className="projects-img" alt="simon game"/></a>
                <a href="https://saliftankoano.github.io/meme-parlor/" target="_blank" rel="noreferrer" ><img src={Portfolio3} className="projects-img" alt="meme parlor"/></a>
                <a href="https://saliftankoano.github.io/who-picks/" target="_blank" rel="noreferrer" ><img src={Portfolio4} className="projects-img" alt="who pciks"/></a>
            </div>
            <button className="projects-btn">See More</button>
        </section>
    )
}
export default projects;