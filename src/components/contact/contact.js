import React,{ useRef } from "react";
import "./contact.css";
import LinkedIn from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import emailjs from '@emailjs/browser';

const Contact= ()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6azgi2c', 'template_c3w4etb', form.current, 'UNAANvOC5nNCCdqeJ')
          .then((result) => {
            e.target.reset();
            alert("Your email was sent, thank you!");
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section id="contact">
            <div className="">
                <h1 className="contact-title">Contact Me</h1>
                <span className="contact-desc">Please fill out the form below, and I will get back to you shortly.</span>
                <form className="contact-form" ref={form} onSubmit={sendEmail}> 
                    <input type="text" className="name" placeholder="Your Name" name="user_name" />
                    <input type="email" className="email" placeholder="Your Email" name="user_email" />
                    <textarea className="msg" rows="5" placeholder="Your message goes here" name="message" >
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
export default Contact;