import React from 'react';
import './App.scss';
import {authService, requests} from './utils/customAxios'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Dashboard from "./components/dashboard";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
    console.log(localStorage.getItem("Bearer"))
    console.log(authService.isLogged())
    authService.login("test1", "qwe123")

    function getdata() {
        console.log(localStorage.getItem("Bearer"));
        console.log(authService.isLogged())
    }

    const style = {
        flex: "1 1 auto"
    }

    return (
        <div className="WrapPage">
            <Router>
                <Header/>
                <MainPage/>
            </Router>
            <Footer/>
        </div>

    );
}

export default App;
