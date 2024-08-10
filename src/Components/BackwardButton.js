import React, { } from "react";
import { Link } from 'react-router-dom';

const BackwardButton = ({linkUrl}) => {   

    return (
        <div className="backward-button">
            <Link href={linkUrl} /> 
        </div>
        
    );
};

export default BackwardButton;