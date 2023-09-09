import React from "react";
import "./contact.css";
import LinkedIn from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

const contact= ()=>{
    return (
        <section id="contact-section">
            <div className="">
                <h1 className="contact-title">Contact Me</h1>
                <span className="contact-desc">Please fill out the form below and will get back to you shortly.</span>
                <form className="contact-form"> 
                    <input type="text" className="name"placeholder="Your Name"/>
                    <input type="email" className="email" placeholder="Your Email"/>
                    <textarea name="message" className="msg" rows="5" placeholder="Your message goes here">
                    </textarea>
                    <button type="submit" value="send" className="send-btn">Send</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/salif-tankoano/"><img src={LinkedIn} alt="Linkedin logo" className="link-img" /></a>
                        <a href="https://github.com/saliftankoano"><img src={Github} alt="Github logo" className="link-img" /></a>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default contact;