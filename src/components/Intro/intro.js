import React from "react";
import "./intro.css";
import {Link} from "react-scroll";
import bg from "../../assets/image.png"
import btnImg from "../../assets/hireme.png";
const intro= ()=>{
    return (
        <section id="intro">
            <div className="intro-content">
                <span className="hello">Hello,</span>
                <span className="intro-txt">I'm <span className="intro-name">Salif</span><br/>Software Developer</span>
                <span className="intro-para">I specialize in building intuitive Software and genuine relationships!</span>
                <Link><button className="btn"><img src={btnImg} alt="hire me logo" className="btn-img" />Hire me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg"/>
        </section>
    )
}
export default intro;