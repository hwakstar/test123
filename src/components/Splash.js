// src/SplashPage.js
import React from 'react';
import logo from '../app-logo.png';
const SplashPage = () => {
    return (
        <div className="container">
            <img src={logo} alt="Bittoken Logo" className="logo" />
            <h1 className="title">BITTOKEN</h1>
        </div>
    );
};

export default SplashPage;