import React, { } from "react";
import '../../assets/css/wallet.css'

const WalletButton = ({title, claname}) => {   

    return (
        <div className='button-title'>
            <div className={claname}></div>
            <div>{title}</div>
        </div>       
    );
};

export default WalletButton;