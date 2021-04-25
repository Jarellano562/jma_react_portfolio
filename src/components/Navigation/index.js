import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation(props) {


    //Map over the array right after the contact link,
    //shown in the following example 20.1.6 Create the NAV component
    return (
        <div className=" row navigation" id="navigation">
            <NavLink to="/about">ABOUT </NavLink>
            <NavLink to="/portfolio">PORTFOLIO </NavLink>
            <NavLink to="/contact">CONTACT </NavLink>
            <NavLink to="/resume">RESUME</NavLink>
        </div>
    );
}

export default Navigation;