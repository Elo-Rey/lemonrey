import React from "react";
import './Footer.css'
/* import { ReactComponent as Brand } from "./images/lemonss.png"; */
/* import { NavLink } from 'react-router-dom'; */

const Footer = () => {
    return (

        <footer>
            <div className="footerbar">
                <div className="footer-image">
                    <img src= "/Lemonss.png" width={200} height={50} alt=" little lemon's logo. it comprises of the words little lemon and a lemon" className="round"></img>
                </div>
                <div className="footer-elements">
            <div className="doormat">
                <h4> Doormat Navigation</h4>
            <ul>
                <li>
                    <a href ="/">Home</a>
                </li>
                <li>
                    <a href =" /about">About</a>
                </li>
                <li>
                    <a href =" /menu">Menu</a>
                </li>
                <li>
                    <a href =" /reservation">Reservation</a>
                </li>
                <li>
                    <a href=" /order">OrderOnline</a>
                </li>
                <li>
                    <a href=" /login">Login</a>
                </li>
            </ul>
            </div>
            <div className="contact">
                <h4> Contact </h4>
                <ul>
                    <li className="soc">
                        <a href="/">Address</a>
                    </li>
                    <li className="soc">
                        <a href="tel +2349056936410" >Phone Number</a>
                    </li>
                    <li className="soc">
                        <a href ="ikwuezumaeloray@gmail.com">Address</a>
                    </li>
                </ul>
            </div>
            <div className="socials">
                <h4> Social Media Links </h4>
                <ul>
                    <li>
                        <a href="https://x.com/mvo_rey">Twitter</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/reynolds_ik" >Instagram</a>
                    </li>
                    <li>
                        <a href ="https://www.linkedin.com/in/elochukwu-ikwuezuma-20b998121">Linked in</a>
                    </li>
                    <li>
                        <a href ="https://github.com/Elo-Rey">2go</a>
                    </li>
                </ul>
            </div>
            </div>
            </div>
        </footer>
    );
  };
  export default Footer;