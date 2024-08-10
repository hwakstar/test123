import React, {  } from 'react';
import comment from '../assets/comment.png';
import nextbtn from '../assets/nextbtn.png';
import slidebtn from '../assets/slidebtn.png';


const LauncherPage = () => {   

    return (
        <div className="container-launcher">
            <img src={comment} alt="Launcher Comment" className="luncher-comment"/>
            <img src={slidebtn} alt="Launcher Slidebtn" className="luncher-slidebtn"/>
            <img src={nextbtn} alt="Launcher Nextbtn" className="luncher-nextbtn"/>
        </div>
    );
};

export default LauncherPage;