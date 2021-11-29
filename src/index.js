import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from './pages/about';
import Login from './pages/login';


ReactDOM.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="*" element={
            <>
                <h1>Error 404 - Page Not Fount</h1>
                <p>please enter the correct URL!!!</p>
            </>
        }></Route>        
    </Routes>
    </BrowserRouter>
,document.getElementById('root'));