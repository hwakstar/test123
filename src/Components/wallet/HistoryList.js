import React, { } from "react";
import '../../assets/css/wallet.css'

const HistoryList = ({picname, title, gmail, cost1, cost2, kind1, kind2, date }) => {  
    
    let classnam = ( title === 'Rank Achievement rewards' ? 'history-list1' : 'history-list2' );

    return (
        
        <div className={classnam}>
            <div className="history-left-container">
                <div className={`history-pic-` + picname}></div>
                <div className="history-text">
                    {
                        gmail && gmail !== ''?
                        (
                            <>
                                <div className="history-title1">{title}</div>                
                                <a href={gmail} className="user-gmail">{gmail}</a>
                            </>
                        ):(
                            title && title === 'Rank Achievement rewards'?
                            (
                                <div className="history-title2">{title}</div> 
                            ):(
                                <div className="history-title3">{title}</div> 
                            )
                        )
                    }
                    {/* <div className="timestamp">{date}</div> */}
                    <div className="timestamp">11:45 01/08/2024</div>
                </div>
            </div>
            <div className="history-right-container">
                {
                    cost2 && cost2 !== ''?
                    (
                        <div >
                            <div className="custom-direction">
                                <div className="hostory-cost2">{cost1}</div>
                                <div className="coin-kind2">{kind1}</div>
                            </div> 
                            <div className="custom-direction"> 
                                <div className="hostory-cost2">{cost2}</div>
                                <div className="coin-kind2">{kind2}</div>
                            </div>  
                        </div>                     
                    ):
                    (
                        <div className="custom-direction">
                            <div className="hostory-cost1">{cost1}</div>
                            <div className="coin-kind1">{kind1}</div>
                        </div >                        
                    )
                }  
                <div className="check"></div>              
            </div>            
        </div>       
    );
};

export default HistoryList;