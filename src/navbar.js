import React from "react";
import "./Navbar.css"

 
export default function Navbar() {
    
    function goHome() {
        document.location.href = `/`
    }

    return (
        <nav className="navbar">
            <h3 className="logo" onClick={goHome}>Event<span className="halv-logo">Hub</span></h3> 
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