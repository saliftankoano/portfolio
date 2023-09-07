import React from "react";
import "./skills.css";
import {Link} from "react-scroll";
import UIDESIGN from "../../assets/ui-design.png";
import WEBDESIGN from"../../assets/website-design.png";
import APPDESIGN from"../../assets/app-design.png";
const skills= ()=>{
    return (
        <section id="skills">
            <span className="skills-title">What I bring to the table</span>
            <span className="skills-desc">I love to build attractive web and mobile applications that impact users day to day lives for the better.<br/> "Useful software, artfully built."</span>
            <div className="skills-bar">

                <div className="skill-bar">
                    <img src={UIDESIGN} alt="UI design" className="skill-img"/>
                    <div className="skill-bar-txt">
                        <h2>UI/UX Design</h2>
                        <p>Write some description of what UI/UX design entails...</p>
                    </div>
                </div>
                <div className="skill-bar">
                    <img src={WEBDESIGN} alt="Web design" className="skill-img"/>
                    <div className="skill-bar-txt">
                        <h2>Web Design</h2>
                        <p>Write some description of what Web design entails...</p>
                    </div>
                </div>
                <div className="skill-bar">
                    <img src={APPDESIGN} alt="App design" className="skill-img"/>
                    <div className="skill-bar-txt">
                        <h2>App Design</h2>
                        <p>Write some description of what App design entails...</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default skills;