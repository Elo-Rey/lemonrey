import React from "react";
import { ReactComponent as Brand } from "../images/lemonss.png";
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="navbar">
            <div className="logo">
                <Brand />
            </div>
            <div className="nav-elements">
            <ul className="nav-links">
                <li>
                    <NavLink to="/" style={ ({isActive})=>({
                        color: isActive ? '#F4CE14' : '#495E57'
                    }) }> HOME </NavLink>
                </li>
                <li>
                    <NavLink to="/#Menu" style={ ({isActive})=>({
                        color: isActive ? '#F4CE14' : '#495E57'
                    }) }> MENU </NavLink>
                </li><li>
                    <NavLink to= {"/Reservation"} style={ ({isActive})=>({
                        color: isActive ? '#F4CE14' : '#495E57'
                    }) }> RESERVATION </NavLink>
                </li><li>
                    <NavLink to={"/OrderOnline"} style={ ({isActive})=>({
                        color: isActive ? '#F4CE14' : '#495E57'
                    }) }> ORDER ONLINE </NavLink>
                </li><li>
                    <NavLink to="{/Login}" style={ ({isActive})=>({
                        color: isActive ? '#F4CE14' : '#495E57'
                    }) }> LOGIN </NavLink>
                </li><li>
                    <NavLink to="/#About" style={ ({isActive})=>({
                        color: isActive ? '#F4CE14' : '#495E57'
                    }) }> ABOUT </NavLink>
                </li>
            </ul>

            {/* Mobile Mode */}
            <div className=" nav-elements-menu">
                <HiMenu
                onClick={() =>{setToggle(true)} }
                className= "nav-hamburger"
                />
                {
                    toggle && (
                    <div>
                     <HiX
                        onClick={() => {
                            setToggle(false)
                        }}
                        className="nav-cancel"/>
                        <Link className="link" to={"/"} onClick={() => { setToggle(false)}}>Home</Link>
                <Link className="link" to={'/Reservations'} onClick={() => { setToggle(false)}}>Reservation</Link>
                <Link className="link" to={"/OrderOnline"} onClick={() => { setToggle(false)}}>OrderOnline</Link>
                <HashLink className="link" smooth to="/#Menu" onClick={() => { setToggle(false)}}>Menu</HashLink>
                <HashLink className="link" smooth to="/#About" onClick={() => { setToggle(false)}}>About</HashLink>   
                   </div> )
                }

            </div>
            </div>
        </nav>
    );
};

export default Nav;