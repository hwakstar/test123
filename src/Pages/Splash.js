// src/SplashPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import logo from '../app-logo.png'; // Import your logo image
import ellipse from '../Ellipse.png';
import ellipse2 from '../Ellipse2.png';

const SplashPage = () => {
    const [fadeOut, setFadeOut] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true); // Trigger fade-out effect
            setTimeout(() => {
                navigate('/launcher'); // Redirect to the launcher page after fade-out
            }, 500); // Wait for the fade-out duration before navigating
        }, 3000); // Show splash for 3 seconds

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, [navigate]);

    return (
        <div className={`container ${fadeOut ? 'fade-out' : 'fade-in'}`}>
            <img src={ellipse2} alt="Bittoken Ellipse2" className="logo-ellipse2"/>
            <img src={logo} alt="Bittoken Logo" className="logo" />
            <h1 className="title">BITTOKEN</h1>
            <img src={ellipse} alt="Bittoken Ellipse" className="logo-ellipse"/>
        </div>
    );
};

export default SplashPage;