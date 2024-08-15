import React, { } from "react";
import { useLocation } from 'react-router-dom';
import '../assets/css/wallet.css';
import fakeimg from "../assets/avatar/0012310.png" // temporary

const TopBar = ({linkUrl, title, avatarURL}) => {   

    const location = useLocation();
    const currentUrl = location.pathname;
    console.log(currentUrl);
    // 0012310
    return (
        <div className="topbar">
            {currentUrl && currentUrl === "/wallet" ?
                (
                    // <img className="circle" url={avatarURL}  width={'29px'} height={'29px'} />
                    <img className="circle" alt="Avatar" src={fakeimg}  width={'29px'} height={'29px'} /> 
                ):(                
                <div className="backward-button"></div>  
                ) 
            } 
            <div className="page-title" >{title}</div>
            <div className="contraction-button"></div>
        </div>     
    );
        
};

export default TopBar;