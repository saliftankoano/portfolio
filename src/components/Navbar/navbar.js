import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import {Link} from "react-scroll";
import contactImg from "../../assets/contact.png"
const navbar= ()=>{
    return (
        <nav className="navbar">
            <img src={logo} alt="" className="logo"/>

            <div className="desk-menu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={600} className="menu-item">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={600} className="menu-item">Skills</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={600} className="menu-item">Projects</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={600} className="menu-item">Contact</Link>
            </div>
            <button className="desk-menu-btn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="menu-img"/>
                Contact Me
            </button>
        </nav>
    )
}
export default navbar;