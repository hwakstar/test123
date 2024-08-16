import React from "react";
import '../../../assets/css/earn.css';

const Topbutton = ({ imageSrc, text, onClick, fontsize }) => {
    return (
        <div style={{marginLeft: '3px'}}>
            <button className="button-earnTop" onClick={onClick}>
                {imageSrc && <img src={imageSrc} alt="" className="button-image-earnTop" />}
                <span className="button-text-earnTop" style={{ fontSize: fontsize }}>{text}</span>

            </button>

        </div>
    );
};

export default Topbutton;