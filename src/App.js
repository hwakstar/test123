// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashPage from './Pages/Splash';
import LauncherPage from './Pages/Launcher'; // Import your launcher page component
import Login from './Pages/auth/Login'; // Import login page
import ForgetPassword from './Pages/verify/ForgetPassword';
<<<<<<< HEAD
import TestBottomBar from './Pages/TestBottomBar';
=======
import SignUp from './Pages/auth/SignUp';// Import SignUp page
import Verification from './Pages/verify/Verification';
import ResetPassword from './Pages/verify/ResetPassword';
import Congratulation from './Pages/verify/Congratulation';

>>>>>>> bcce837ee5dbf065ce76264f171a82983902c9b7
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SplashPage />} />
                <Route path="/launcher" element={<LauncherPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgetpassword" element={<ForgetPassword/>} />
<<<<<<< HEAD
                <Route path="/testbottombar" element={<TestBottomBar/>} />
=======
                <Route path="/verify" element={<Verification/>} />
                <Route path="/ResetPassword" element={<ResetPassword/>} />
                <Route path="/Congratulation" element={<Congratulation/>} />
>>>>>>> bcce837ee5dbf065ce76264f171a82983902c9b7
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;