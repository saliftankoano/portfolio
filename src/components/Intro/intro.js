import React from "react";
import "./intro.css";
import btnImg from "../../assets/hireMe.svg";
import Resume from "../../assets/resume.pdf";
import profile from "../../assets/me.png";

const Intro= ()=>{
    return (
        <section className="intro">
                <img src={profile} alt='profile' id='profile'/>
                <div className='left'>
                    <span className="intro-name">I'm <span className="salif">Salif</span><br/></span>
                    <span className="job">Junior Software Developer<br/></span>
                    <a  href={Resume} download="salif-resume"><button className="btn"><img src={btnImg} alt="suitcase logo" className="btn-img" />Resume</button></a>
                </div>
        </section>
    );
}
export default Intro;