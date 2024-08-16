// BottomBar.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mineImg1 from '../assets/mine1.png';
import mineImg2 from '../assets/mine2.png';
import profileImg1 from '../assets/profile1.png';
import profileImg2 from '../assets/profile2.png';
// import teamImg1 from '../assets/team1.png';
import teamImg1 from '../assets/team2.png';
import teamImg2 from '../assets/team2.png';
import earnImg1 from '../assets/earn1.png';
import earnImg2 from '../assets/earn2.png';
import walletImg1 from '../assets/wallet1.png';
import walletImg2 from '../assets/wallet2.png';


// export default BottomBar;
const BottomBar = () => {
  const [activeButton, setActiveButton] = useState(() => {
    // Load the active button state from localStorage
    return localStorage.getItem('activeButton') || null;
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Store the active button state in localStorage whenever it changes
    localStorage.setItem('activeButton', activeButton);
  }, [activeButton]);

  const handleButtonClick = (path, buttonName) => {
    setActiveButton(buttonName);
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <div className="bottom-bar">
      <button className="bottom-bar-button" onClick={() => handleButtonClick('/profile', 'profile')}>
        <img src={activeButton === 'profile' ? profileImg1 : profileImg2} alt="Profile" className="bottom-bar-icon" />
        <a className='bottom-bar-text'>Profile</a>
      </button>
      <button className="bottom-bar-button" onClick={() => handleButtonClick('/team', 'team')}>
        <img src={activeButton === 'team' ? teamImg2 : teamImg2} alt="Team" className="bottom-bar-icon" />
        <a className='bottom-bar-text'>Team</a>
      </button>
      <button className="bottom-bar-button" onClick={() => handleButtonClick('/mine', 'mine')}>
        <img src={activeButton === 'mine' ? mineImg1 : mineImg2} alt="Mine" className="bottom-bar-icon" />
        <a className='bottom-bar-text'>Mine</a>
      </button>
      <button className="bottom-bar-button" onClick={() => handleButtonClick('/earn', 'earn')}>
        <img src={activeButton === 'earn' ? earnImg1 : earnImg2} alt="Earn" className="bottom-bar-icon" />
        <a className='bottom-bar-text'>Earn</a>
      </button>
      <button className="bottom-bar-button" onClick={() => handleButtonClick('/wallet', 'wallet')}>
        <img src={activeButton === 'wallet' ? walletImg1 : walletImg2} alt="Wallet" className="bottom-bar-icon" style={{ height: "21px", width: "21px" }} />
        <a className='bottom-bar-text' style={{ paddingTop: '4px' }}>Wallet</a>
      </button>
    </div>
  );
};

export default BottomBar;


