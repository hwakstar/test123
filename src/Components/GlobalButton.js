import React, { } from "react";

const GlobalButton = ({BtnName, Class}) => {   

    return (
        <div className={Class}> 
            <button className="global-button" type="submit">{BtnName}</button>
        </div>
    );
};

export default GlobalButton;