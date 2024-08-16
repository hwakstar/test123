import React from "react";
import '../../../assets/css/earn.css';
import coinImage from "../../../assets/earnimg/coin.png";
// import facebookMark from "../../../assets/earnimg/facebook-mark.png";
// import greenCheck2 from "../../../assets/earnimg/greencheck2.png";
import instagramMark from "../../../assets/earnimg/instagram-mark.png";
// import telegramMark from "../../../assets/earnimg/telegram-mark.png";
// import tiktokMark from "../../../assets/earnimg/tiktok-mark.png";
// import twitterMark from "../../../assets/earnimg/twitter-mark.png";
// import youtubeMark from "../../../assets/earnimg/youtube-mark.png";

const EarnCard3 = ({ mark, title, ID, money }) => {
    return (
        <>
            <div className="earncard-missed">
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
                    <div className="earncard-missedtext">This task is no longer available</div>
                </div>
            </div>
        </>
    );
};

export default EarnCard3;