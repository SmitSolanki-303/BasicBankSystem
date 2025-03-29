import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';

import HomePageImg from "../assets/home-page1.png";


function Home() {
    return(
        <div className="main-homepage">
            <div className="left-info-container">
                <h1>Effortless Money Transfers: Secure, Seamless, Anytime</h1>

                <p>Discover seamless, secure money transfers day and night. Move funds swiftly and safely, 
                    unrestricted by traditional banking hours. Our intuitive interface ensures a stress-free 
                    experience, giving you full control of your finances with peace of mind. Experience a new 
                    level of convenience and reliability tailored to meet your financial needs.</p>


                <div className="button-container">
                    <Link to="/TransferAmount" className="send-btn">Send Money {<span>&#10140;</span>}</Link>
                </div>
            </div>

            <div className="right-image-container">
                <img src={HomePageImg} alt=" Image" className="home-image" />
            </div>
        </div>
    )
}

export default Home;