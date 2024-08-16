// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashPage from './Pages/Splash';
import LauncherPage from './Pages/Launcher'; // Import your launcher page component
import Login from './Pages/auth/Login'; // Import login page
import ForgetPassword from './Pages/verify/ForgetPassword';
import SignUp from './Pages/auth/SignUp';// Import SignUp page
import Verification from './Pages/verify/Verification';
import ResetPassword from './Pages/verify/ResetPassword';
import Congratulation from './Pages/verify/Congratulation';
import Profile from './Pages/Profile/Profile';
import Wallet from './Pages/Wallet/Wallet';
import History from './Pages/Wallet/History';
<<<<<<< HEAD
import Earn from './Pages/earn/Earn';
=======
import Team from './Pages/Team/Team';
>>>>>>> 42762ee93a2c7eb4b272daa9eecb9c12565e688b

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SplashPage />} />
                <Route path="/launcher" element={<LauncherPage />} />

                {/* auth */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgetpassword" element={<ForgetPassword/>} />
                <Route path="/verify" element={<Verification/>} />
                <Route path="/ResetPassword" element={<ResetPassword/>} />

                {/* profile */}
                <Route path="/profile" element={<Profile/>} />                
                <Route path="/Congratulation" element={<Congratulation/>} />
<<<<<<< HEAD
                <Route path="/earn" element={<Earn />} />
=======

                {/* wallet */}
>>>>>>> 42762ee93a2c7eb4b272daa9eecb9c12565e688b
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/wallet/history" element={<History />} />

                {/* team */}
                <Route path="/team" element={<Team/>} />  
                
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;