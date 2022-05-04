import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Dashboard from "./dashboard";
import Menu from "./Menu";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Slider from "./Slider";
import { ClassNames } from '@emotion/react';

function MainPage() {
    const rollBack = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
  
    return <div className="MainPage">
        <Slider/>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        <button className="Return" onClick={rollBack}><KeyboardArrowUpIcon/></button>
    </div>

}

export default MainPage
