import React from "react";

import "../styles/ContactUs.css";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { GrLocation, GrMailOption, GrPhone } from "react-icons/gr";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function ContactUs() {
    return (
        <div className="main-content-contactus">
            <title className="title">CONTACT US</title>

            <div className="sub-content-contactus">
                <div className="left-details">
                    <h2>Smit Solanki</h2>
                    <p className="info-data">
                        Feel free to reach out to us via the contact form below. We're here
                        to assist you with any inquiries or feedback you may have. We look
                        forward to hearing from you!
                    </p>

                    <a
                        href="https://in.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a
                        href="https://in.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="social-icon" />
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className="social-icon" />
                    </a>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook className="social-icon" />
                    </a>
                </div>

                <div className="middle-details">
                    <p>
                        <GrLocation className="social-icon" />
                        Surat, Gujarat, India
                    </p>
                    <p>
                        <GrMailOption className="social-icon" />
                        info@example.com
                    </p>
                    <p>
                        <GrPhone className="social-icon" />
                        +91 98765 43210
                    </p>
                </div>

                <div className="right-details">
                    <input type="text" placeholder="Your Name" className="input-field" />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input-field"
                    />
                    <input type="text" placeholder="Subject" className="input-field" />
                    <textarea placeholder="Message" className="input-field-textarea" />

                    <Link to="/">
                        <Button variant="outline-primary" className="submit-button">
                            Send Message
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
