import React, { useState, useRef } from "react";
import "../styles/contact.css"
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mail from "../assets/mail.svg"
const Contact = () => {
    const [values, setValues] = useState({
        username: "",
        subject: "",
        email: "",
        text: ""
    })
    const form = useRef();
    function handleChange(e) {
        const { value, name } = e.target
        setValues({ ...value, [name]: value })
    }
    const notify = () => toast.success('Your Message is being sent', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_l7xuamj', 'template_rppbwiy', form.current, 'V2migzVEtqEWtZlEG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <div>
            <h1 style={{ padding: "3em 0 1em 0" }}>Contact Us</h1>
            <div className="main-contact">


                <form className="contact" onSubmit={sendEmail} ref={form}>
                    <div className="username-box">
                        <label htmlFor="username">Username</label>
                        <input required type="text" id="username" name="username" onChange={handleChange} placeholder="username " />
                    </div>
                    <div className="subject-box">
                        <label htmlFor="subject">Subject</label>
                        <input required type="text" id="subject" name="subject" onChange={handleChange} placeholder="subject " />
                    </div>
                    <div className="emaily-box">
                        <label htmlFor="email">Email</label>
                        <input required type="email" id="email" name="email" onChange={handleChange} placeholder="email ..." />
                    </div>
                    <div className="text-box">
                        <label htmlFor="text">Message</label>
                        <textarea required name="text" id="text" cols="30" rows="10" onChange={handleChange} placeholder="message ..."></textarea>
                    </div>
                    <button className="send-btn" >send</button>
                </form>
                <div>
                    <img src={mail} alt="mail" />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
