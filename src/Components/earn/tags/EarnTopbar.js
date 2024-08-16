import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Topbutton from "../components/Topbutton";
import ToptabMenu from "../components/ToptabMenu";
import EarnCard from "../components/EarnCard";
import EarnCard2 from "../components/EarnCard2";
import EarnCard3 from "../components/EarnCard3";
import topicon1 from "../../../assets/earnimg/topicon1.png";
import topicon2 from "../../../assets/earnimg/topicon2.png";
import topicon3 from "../../../assets/earnimg/topicon3.png";
import topicon4 from "../../../assets/earnimg/topicon4.png";
import '../../../assets/css/earn.css';
import '../../../assets/css/wallet.css';

const EarnTopbar = () => {
    const tabs = [
        {
            id: 'tab1', title: 'Active tasks', content: <EarnCard
                image=" "
                title="Bittoken Intro video"
                ID="12345"
                money="2,500"
            />
        },
        {
            id: 'tab2', title: 'Completed tasks', content:
                <div>
                    <EarnCard2
                        image=" "
                        title="Bittoken Intro video"
                        ID="12345"
                        money="2,500"
                    />
                </div>
        },
        {
            id: 'tab3', title: 'Missed apporttunities', content: <EarnCard3
                image=" "
                title="Bittoken Intro video"
                ID="12345"
                money="2,500"
            />
        },
    ];
    const handleClick = () => {
        alert('Button clicked!');
    };
    return (
        <div className="container-earnTopbar">
            <div className="topbar">
                <div className="backward-button"></div>
                <div className="page-title" >Bittoken</div>
                <div className="contraction-button"></div>
            </div>
            <div className="toptext-earn">
                Earn more Reward Tokens by completing these simple tasks
            </div>
            <div className="topbuttons-earnTop">
                <Topbutton
                    imageSrc={topicon1}
                    text="ViewYard"
                    onClick={handleClick}
                    fontsize={13}
                />
                <Topbutton
                    imageSrc={topicon2}
                    text="Like and comment"
                    onClick={handleClick}
                    fontsize={10}
                />
                <Topbutton
                    imageSrc={topicon3}
                    text="Subscribe/ Follow/Join"
                    onClick={handleClick}
                    fontsize={10}
                />
                <Topbutton
                    imageSrc={topicon4}
                    text="Special"
                    onClick={handleClick}
                    fontsize={11}
                />
            </div>
            <div style={{ paddingTop: '5px' }}>
                <ToptabMenu tabs={tabs} />
            </div>
        </div>
    );
};

export default EarnTopbar;