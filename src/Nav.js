import React from "react";
import {MdClose} from 'react-icons/md';
import {FiMenu} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import './Nav.css'

const Nav = () => {
    
    /* const [toggle, setToggle] = useState(false); */
    const [navOpen, setNavOpen] =useState(false);
    const ref =useRef();
    useEffect(() => {
        const outside = (event) =>{
            if(
                navOpen &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setNavOpen(false);
            }
        };
        document.addEventListener('mousedown', outside);
        return () => {
            document.removeEventListener('mousedown', outside);
        };
    }, [navOpen]);
    return (

        <nav ref={ref} className="navbar">
            <div className="nav-elements">

          <div className="nav-square">
             <ul className="nav-links">
                <li className="link">
                    <Link className= "head" to={"/"}> HOME </Link>
                </li>
                <li className="link">
                <Link className= "head" to= {"/"}> MENU </Link>
                </li>
                <li className="link">
                    <Link className= "head" to={"/reservation"}> RESERVATION </Link>
                </li>
                <li className="link">
                    <Link className= "head" to={"/"}> ORDER ONLINE </Link>
                </li>
                <li className="link">
                    <Link className= "head" to= {"/"}> LOGIN </Link>
                </li>
                <li className="link">
                    <Link className= "head" to={"/"}> ABOUT </Link>
                </li>
            </ul>
            </div>

            {/* Mobile Mode */}
            <div className=" nav-md-menu">
                <button
                className="toggle"
                onClick ={()=> setNavOpen((prev)=> !prev)}>
                    {navOpen ? (
                        <MdClose style ={{ width: '32px', height: '32px'}}/>
                    ): (
                        <FiMenu
                            style={{
                                width: '32px',
                                height: '32px',
                            }}
                            />
                    )}
                </button>
                <ul className={`nav-menu${navOpen ? 'show-menu' :''}`}>
                <li className="link-md">
                    <a className= "head" href="/"> HOME </a>
                    <hr class="nav-small"/>
                </li>
                <li className="link-md">
                <a className= "head" href="/"> MENU </a>
                <hr class="nav-small"/>
                </li>
                <li className="link-md">
                    <a className= "head" href="/reservation"> RESERVATION </a>
                    <hr class="nav-small"/>
                </li>
                <li className="link-md">
                    <a className= "head" href="/"> ORDER ONLINE </a>
                    <hr class="nav-small"/>
                </li>
                <li className="link-md">
                    <a className= "head" href="/"> LOGIN </a>
                    <hr class="nav-small"/>
                </li>
                <li className="link-md">
                    <a className= "head" href="/"> ABOUT </a>
                    <hr class="nav-small"/>
                </li>
                </ul>

            </div>
            </div>
        </nav>
    );
};

export default Nav;