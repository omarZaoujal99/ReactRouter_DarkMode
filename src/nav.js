import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import "./styles/nav.css";

export const Nav = () => {
    return (
        <>
        <nav className="navigation">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/login" className="nav-link">Login</Link>
        </nav>
        <Outlet />
        </>
    )
}