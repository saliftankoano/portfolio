import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import {Link} from "react-scroll";
import contact from "../../assets/contact.png"
import menu from "../../assets/menu.png"


const Navbar= ()=>{
    const [showMenu, setShowMenu]= useState(false);
    return (
        <nav className="navbar">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={600} className="menu-item"><img src={logo} alt="" className="logo"/></Link>
            <div className="desk-menu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={600} className="menu-item">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={600} className="menu-item">Skills</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={600} className="menu-item">Projects</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={600} className="menu-item">Contact</Link>
            </div>
            <button className="desk-menu-btn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contact} alt="" className="menu-img"/>
                Contact Me
            </button>
            {/* Mobile Menu */}
            <img src={menu} alt="" className="mobile-menu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="mobile-nav" style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={600} className="mobile-item" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={600} className="mobile-item" onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={600} className="mobile-item" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={600} className="mobile-item" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}
export default Navbar;