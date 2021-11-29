import React from 'react';
import {Link,Outlet} from "react-router-dom"; 
// navigation
import { Nav } from '../nav';
// css
import "../styles/home.css";
// dark mode toggle
import DarkMode from '../darkMode';

export default function Home() {
    return (
        <>
            <Nav />
            <div className="divMain">
                <h1>Home</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A minima itaque asperiores, voluptas 
                repudiandae qui mollitia vero? Voluptas quibusdam odit, praesentium quidem iusto tenetur adipisci 
                facilis quo cupiditate architecto neque ratione, perspiciatis, sunt dolor. Tempora obcaecati accusamus 
                quisquam at ex quidem omnis dolorum aliquid ducimus voluptatem dignissimos quod, accusantium facere?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusantium? Impedit eos 
                exercitationem asperiores reiciendis voluptatem inventore tempora obcaecati iure?</p>
                <Link to="/about">
                    <button>About</button>
                </Link>
                <Link to="/shop">
                    <button>Shop</button>
                </Link>
            </div>
            <DarkMode />
        </>
    )
}
