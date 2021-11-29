import React from 'react';
// navigation
import { Nav } from '../nav';
// css
import "../styles/login.css";
// dark mode toggle
import DarkMode from '../darkMode';

export default function Login() {
    return (
        <>
            <Nav />
            <div className="divLogin">
                <h1>Login</h1>
                <form action="#">
                    <div className="dInp">
                        <label htmlFor="em">Email:</label>
                        <input type="email" name="uemail" id="em" placeholder="abc123@..."/>
                    </div>
                    <div className="dInp">
                        <label htmlFor="pa">Password:</label>
                        <input type="password" name="upassword" id="pa" placeholder="******"/>
                    </div>
                    <input type="submit" value="LOGIN" className="btnLog" />
                </form>
            </div>
            <DarkMode />
        </>
    )
}
