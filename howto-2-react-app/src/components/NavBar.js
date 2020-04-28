import React from "react";
import { NavLink } from 'react-router-dom'


function NavBar (props){
    return(
        <div className="NavContainer">  
        <h1 className="HowToTitle">How-To App</h1>
        <div className="navLinks">     
        {/* if user is not logged in, there are 2 NavLinks, Register and Login. */}
        <NavLink to="/register">
        Register
        </NavLink>
        <NavLink to="/login">
        Login
        </NavLink>
        {/* if user is logged in, there are 2 NavLinks, Dashboard and Logout */}
        {/* if user is logged in, NavLink will route to userDashboard */}
        <NavLink to="/user/dashboard">
        User Dashboard
        </NavLink>
        {/* if instructor is logged in, NavLink will route to instructorDashboard */}
        <NavLink to="/instructor/dashboard">
        Instructor Dashboard
        </NavLink>
        <NavLink to="/login">
        Logout
        </NavLink>
        </div>
        </div>
    );
}

export default NavBar; 