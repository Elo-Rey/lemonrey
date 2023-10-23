import React from "react";
import lemonss from "C:/Users/NEC/Desktop/reycapstone/elo/src/images/lemonss.png";
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import './Nav.css'

const Nav = () => {
    /* const [toggle, setToggle] = useState(false); */
    return (
        <nav className="navbar">
            <div className="nav-elements">
            <ul className="nav-links">
                <li className="link">
                    <a className= "head" href="/"> HOME </a>
                </li>
                <li className="link">
                <a className= "head" href="/"> MENU </a>
                </li>
                <li className="link">
                    <a className= "head" href=""> RESERVATION </a>
                </li>
                <li className="link">
                    <a className= "head" href=""> ORDER ONLINE </a>
                </li>
                <li className="link">
                    <a className= "head" href=""> LOGIN </a>
                </li>
                <li className="link">
                    <a className= "head" href=""> ABOUT </a>
                </li>
            </ul>

            {/* Mobile Mode */}
  {/*           <div className=" nav-elements-menu">
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

            </div> */}
            </div>
        </nav>
    );
};

export default Nav;