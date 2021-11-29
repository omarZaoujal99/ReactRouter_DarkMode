import React from 'react';
// navigation
import { Nav } from '../nav';
// css (I'll use the some style of the home page)
import "../styles/home.css"
import "../styles/shop.css"
// images (3 pics only for making some content)
import avocadoOil from "../images/avocadoOil.jpg";
import backPack from "../images/backPack.jpg";
import petCare from "../images/petCare.jpg";
// dark mode toggle
import DarkMode from '../darkMode';

export default function Shop() {
    return (
        <>
            <Nav />
            <div className="divMain">
                <h1>Shop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusantium? Impedit eos 
                exercitationem asperiores reiciendis voluptatem inventore tempora obcaecati iure?</p>
                <div className="divPics">
                    <img src={avocadoOil} alt="avocadoOil" />
                    <img src={backPack} alt="backPack" />
                    <img src={petCare} alt="petCare" />
                </div>
            </div>
            <DarkMode />
        </>
    )
}
