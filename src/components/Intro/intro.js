import React from "react";
import "./intro.css";
import btnImg from "../../assets/hireMe.svg";
import Resume from "../../assets/resume.pdf";

const intro= ()=>{
    return (
        <section id="intro">
            <div className="intro-content">
                <span className="intro-txt">I'm <span className="intro-name">Salif</span><br/>Junior Software Developer</span>
                <span className="intro-para">Fall 2023 Grad<br/>Looking for my first professional position.<br/> I specialize in building intuitive Software and genuine relationships!</span>
                <a  href={Resume} download="salif-resume"><button className="btn"><img src={btnImg} alt="suitcase logo" className="btn-img" />Hire me!</button></a>
            </div>
        </section>
    )
}
export default intro;