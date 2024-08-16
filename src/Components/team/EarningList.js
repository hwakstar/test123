import React from "react";

const EarningList = ({title, cost}) => {

    let classnam = (title  === "TOTAL TEAM EARNINGS" ? "earning-list-container1" : "earning-list-container2");

    return(
        <div className={classnam}>
            <div className="earning-title">{title}</div>
            <div className="earning-right-container">
                <div className="coin-log"></div>
                <div className="earning-cost">{cost}</div>
            </div>            
        </div>
    )
}

export default EarningList;