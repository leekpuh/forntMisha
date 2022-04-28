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

    let [click, setClick] = useState(false)

    return <div className="Header">
        <div className="CenterColumn">
            <div className="MinWidthColumn">
                header
                <Link to="/">Home</Link>
                <Link to="/dashboard">dashboard</Link>
                <Link to="/about">about</Link>
            </div>
        </div>
        <div className="LoginButton">
            {click
                ? <Button variant="contained" onClick={() => {
                    setClick(!click)
                }}>Contained</Button>
                : <Button variant="outlined" onClick={() => {
                    setClick(!click)
                }}>Contained</Button>
            }
        </div>


    </div>
}

export default Header
