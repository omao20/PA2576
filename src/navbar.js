import React from "react";
import "./Navbar.css"
import logo from './logo.jpg'; // Tell webpack this JS file uses this image

 
export default function Navbar() {
    
    function goHome() {
        document.location.href = `/`
    }

    return (
        <nav className="navbar">
            <img className="logoreact" src={logo}  onClick={goHome} alt="Logo" />;
            {/* <h3 className="logo" onClick={goHome}>Event<span className="halv-logo">Hub</span></h3>  */}

            <ul>
                <li className="login-button">
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a  href="/login">Sign up</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
              
            </ul>
        </nav>
    )
}