import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Basket } from '../basket/Basket'
import { UserLogo } from "../user-logo/UserLogo"
import { Search } from "../search/Search"
import { GAMES } from "../../constance/data-games"
import { SiUbisoft } from "react-icons/si"


import "./Navbar.css";
import { ButtonCatalog } from "../button-catalog/ButtonCatalog";



function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            <div className={active}>
                <div className="wrapper">
                    <div className='logo-title-wrapper '>
                        <Link to="/" className='header_store-title'><SiUbisoft /></Link>
                    </div>
                    <div>
                        <Link to="/catalog"><ButtonCatalog /></Link>
                    </div>
                    <div className='search-wrapper'>
                        <Search data={GAMES} placeholder="Введите название игры" />
                    </div>
                    <div className="header_basket-btn-wrapper" >


                        <div className='logo-user_wrapper'>
                            <UserLogo size={25} /></div>
                        <div className='basket-icon-wrapper'>
                            <Basket />
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav >
    );
}

export default Navbar;
