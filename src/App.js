import React from "react";
import './app.css';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';
import Navbar from './Component/Navbar/Navbar';

const App = () => {
    return (
        <>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
        </>
    )
}


export default App
