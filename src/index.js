import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Routes, Route} from 'react-router-dom';
// pages
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from './pages/about';
import Login from './pages/login';


ReactDOM.render(
    <HashRouter>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/shop" element={<Shop />}></Route>
            <Route path="*" element={
                <>
                    <h1>Error 404 - Page Not Fount</h1>
                    <p>please enter the correct URL!!!</p>
                </>
            }></Route>        
        </Routes>
    </HashRouter>
,document.getElementById('root'));