import React from "react";
import { ReactComponent as Brand } from "../images/lemonss.png";
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Brand />
            <div className="nav-elements">
            <ul>
                <li>
                    <a href ="/">HOME</a>
                </li>
                <li>
                    <a href =" /about">ABOUT</a>
                </li>
                <li>
                    <a href =" /menu">MENU</a>
                </li>
                <li>
                    <a href =" /reservation">RESERVATION</a>
                </li>
                <li>
                    <a href=" /order">ORDER ONLINE</a>
                </li>
                <li>
                    <a href=" /login">LOGIN</a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
    );
};

export default Nav;