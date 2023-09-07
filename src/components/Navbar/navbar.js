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
                <Link className="menu-item">Home</Link>
                <Link className="menu-item">Projects</Link>
                <Link className="menu-item">About me</Link>
                <Link className="menu-item">Contact</Link>
            </div>
            <button className="desk-menu-btn">
                <img src={contactImg} alt="" className="menu-img"/>
                Contact Me
            </button>
        </nav>
    )
}
export default navbar;