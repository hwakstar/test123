import React, { } from "react";
import '../../assets/css/wallet.css'

const BalanceList = ({title, cost, icon, subtitle}) => {   
    


    return (
        <div className='container-balance'>
            <div className="subcontainer-balance">
                <div className={`balance-icon-`+icon}></div>
                <div className="balance-title">
                    <div className='top-title'>{title}</div>
                    <div className="sub-title">{subtitle}</div>
                </div>                
            </div>            
            <div classnam='balance-cost'>{cost}</div>
        </div>       
    );
};

export default BalanceList;