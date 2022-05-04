import React, {useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {Button} from "@mui/material";
import './Header.scss'
import Home from "./home";
import About from "./about";
import Dashboard from "./dashboard";

function Header() {
    // ButtonTypeMap.props.variant
    const buttonStyle = {
        actived: "contained",
        deavited: "outlined"
    }
    const rollMenu = () => {
        window.scrollTo({
            top: 1100,
            left: 0,
            behavior: 'smooth',
        });
    }
    

    let [click, setClick] = useState(false)

    return <div className="Header">
        <div className="CenterColumn">
            <div className="MinWidthColumn">
                <Link to="/">ГЛАВНАЯ</Link>
                <Button variant='outlined' color='warning' onClick={rollMenu}>МЕНЮ</Button>
                <Link to='/'>БЛОГ</Link>
                <Link to='/about'>КОНТАКТЫ</Link>
            </div>
        </div>
        <div className="BookButton">
            {click
                ? <Button variant="contained" color='warning' onClick={() => {
                    setClick(!click)
                }}>Забронировать</Button>
                : <Button variant="outlined" color='warning' onClick={() => {
                    setClick(!click)
                }}>Забронировать</Button>
            }
        </div>


    </div>
}

export default Header
