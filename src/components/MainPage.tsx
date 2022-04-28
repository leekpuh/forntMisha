import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Dashboard from "./dashboard";

function MainPage() {
    const rollBack = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
    return <div className="MainPage">
        gersg
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        <button className="Return" onClick={rollBack}>qwesrdtfgyhjgf</button>
    </div>

}

export default MainPage
