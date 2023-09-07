import React from "react";
import "./projects.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

const projects= ()=>{
    return (
        <section id="projects">
            <h2 className="projects-title">My Projects</h2>
            <span className="projects-desc">I strive to build original projects with a plethora of purposes.<br/> Some of these projects are used on a daily basis by friends and family members.<br/> Giving me feedback and allowing me to improve them.</span>
            <div className="projects-imgs">
                <img src={Portfolio1} className="projects-img" alt=""/>
                <img src={Portfolio2} className="projects-img" alt=""/>
                <img src={Portfolio3} className="projects-img" alt=""/>
                <img src={Portfolio4} className="projects-img" alt=""/>
                <img src={Portfolio5} className="projects-img" alt=""/>
                <img src={Portfolio6} className="projects-img" alt=""/>
            </div>
            <button className="projects-btn">See More</button>
        </section>
    )
}
export default projects;