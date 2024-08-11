// BottomBar.js
import React from 'react';
import '../index.css'; // Import the CSS file


const BottomBar = () => {
    const bottombtns =[
        { src: 'bottombarimages/profile2.png', alt: 'Profile' },
        { src: 'bottombarimages/team2.png', alt: 'Team' },
        { src: 'bottombarimages/mine2.png', alt: 'Mine' },
        { src: 'bottombarimages/earn2.png', alt: 'Eran' },
        { src: 'bottombarimages/wallet2.png', alt: 'Wallet' }
    ];
    const handleButtonClick = () => {
        // Define what happens when the image button is clicked
        console.log('Image button clicked!');
        // For example, navigate to a different page or perform some action
      };
  return (
    <div className="bottom-bar">
      {bottombtns.map((bottombtn, index) => (
        <button key={index} className="bottom-bar-button">
          <img src={bottombtn.src} alt={bottombtn.alt} className="bottom-bar-icon" />
          <text className='bottom-bar-text'>{bottombtn.alt}</text>
        </button>
      ))}
    </div>
  );
};

export default BottomBar;