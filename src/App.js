// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashPage from './Pages/Splash';
import LauncherPage from './Pages/Launcher'; // Import your launcher page component
import Login from './Pages/auth/Login'; // Import login page

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SplashPage />} />
                <Route path="/launcher" element={<LauncherPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgetpassword" element={<ForgetPassword/>} />

                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;