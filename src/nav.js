import React from 'react';
import {NavLink, Outlet, useParams} from 'react-router-dom';
import "./styles/nav.css";

export const Nav = () => {
    let params = useParams();
    console.log(params);
    return (
        <>
        <nav className="navigation">
            <NavLink to="/" activeClassName="active" className="nav-link">Home</NavLink>
            <NavLink to="/shop" activeClassName="active" className="nav-link">Shop</NavLink>
            <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
            <NavLink to="/login" activeClassName="active" className="nav-link">Login</NavLink>
        </nav>
        <Outlet />
        </>
    )
}