import React from "react";
import "./skills.css";
import reactLogo from '../../assets/react.svg';
//import WEBDESIGN from"../../assets/website-design.png";

import Html from"../../assets/html-5.png";
import Css from "../../assets/css-3.png";
import Js from "../../assets/js.png";
import Java from "../../assets/java.png";
import JQuery from "../../assets/jquery.svg";
import Node from "../../assets/node.svg";

const skills= ()=>{
    return (
        <section id="skills">
            <span className="skills-title">What I bring to the table</span>
            <span className="skills-desc">I love to build attractive web and mobile applications that impact users day to day lives for the better.<br/> "Useful software, artfully built."</span>
            <div className="skills-bar">
                <div className="skill-bar">
                    <img className="skill-img" src={Html} alt="html logo"/>
                    <img className="skill-img" src={Css} alt="css logo"/>
                    <img className="skill-img" src={Js}   alt="javascript logo"/>
                    <img className="skill-img" src={Java} alt="java logo"/>
                    <img className="skill-img" src={JQuery} alt="jquery logo"/>
                    <img className="skill-img" src={Node} alt="node logo"/>
                    <img className="App-logo" src={reactLogo}  alt="react logo" />
                </div>
                {/* <div className="skill-bar">
                    <img src={WEBDESIGN} alt="Web design" className="skill-img"/>
                    <div className="skill-bar-txt">
                        <h2>Web Design</h2>
                        <p>Write some description of what Web design entails...</p>
                    </div>
                </div> */}

            </div>
        </section>
    )
}
export default skills;