import React from "react";
/* import { ReactComponent as Brand } from "./images/lemonss.png"; */
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (

        <footer>
            <nav className="footerbar">
            <div className="logo">
                {/* <Brand /> */}
            <div className="doormat">
                <h4> Doormat Navigation</h4>
            <ul>
                <li>
                    <a href ="/">Home</a>
                </li>
                <li>
                    <a href =" /about">Aout</a>
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
                    <li>
                        <a href="/">Address</a>
                    </li>
                    <li>
                        <a href="tel +2349056936410" >Phone Number</a>
                    </li>
                    <li>
                        <a href ="ikwuezumaeloray@gmail.com">Address</a>
                    </li>
                </ul>
            </div>
            <div>
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
          </nav>

        </footer>
    );
  };
  export default Footer;