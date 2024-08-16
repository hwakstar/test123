import React from "react";
/*----import images----*/
import coinImage from "../../../assets/earnimg/coin.png";
// import facebookMark from "../../../assets/earnimg/facebook-mark.png";
import greenCheck2 from "../../../assets/earnimg/greencheck2.png";
import instagramMark from "../../../assets/earnimg/instagram-mark.png";
// import telegramMark from "../../../assets/earnimg/telegram-mark.png";
// import tiktokMark from "../../../assets/earnimg/tiktok-mark.png";
// import twitterMark from "../../../assets/earnimg/twitter-mark.png";
// import youtubeMark from "../../../assets/earnimg/youtube-mark.png";

import '../../../assets/css/earn.css';

const EarnCard = ({ mark, title, ID, money, totalslots, doneslots, leftslots }) => {
    console.log(mark, title, ID, money, totalslots, doneslots, leftslots)
    return (
        <>
            <div className="earncard">
                <div className="earncard-top">
                    <div className="earncard-topborder">
                        <div className="earncard-top-col">
                            <img src={instagramMark} alt={title} />
                            <div className="earncard-title">{title}</div>
                        </div>
                        <div className="earncard-top-col">
                            <div className="earncard-id">TaskID: {ID}</div>
                            <img src={coinImage} alt={title} style={{ marginLeft: "10px" }} />
                            <div className="earncard-money">+{money}RT</div>
                        </div>
                    </div>
                </div>
                <div className="earncard-down">
                    <div className="earncard-totalslots">
                        <div>Total slots</div>
                        <div>10,000</div>
                    </div>
                    <div className="earncard-done">
                        <div className="earncard-done-sub">
                            <div>Done</div>
                            <img src={greenCheck2} alt="##"/>
                        </div>
                        <div>9,999</div>
                    </div>
                    <div className="earncard-slotsleft">
                        <div style={{ color: "#FE5948" }}>Slots left</div>
                        <div>1</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EarnCard;