import React from "react";
import BottomBar from "../../Components/Bottombar";
import TopBar from "../../Components/TopBar";
import InviteButton from "../../Components/team/InviteButton";
import EarningList from "../../Components/team/EarningList";
import '../../assets/css/team.css';

const Team = () => {
    return(
        <>
            <div className="container-team">
                <TopBar title={'Bittoken'} />
                <div className="logo-diamond2 mx-auto" >
                    
                </div>
                <div className="invite-link">
                    <div className="link-header">
                        <div>My invite link:</div>
                        <div className="copy-btn">Copy</div>
                    </div>
                    <div className="link-url">https://t.me/minebittoken_bot/?start=ref_1302355777adadadada</div>
                </div>
                <InviteButton />
                <div className="teamtotal-number">
                    <div>Team Total</div>
                    <div className="underline"></div>
                    <div className="total-number">99</div>
                </div>
                <div className="earnings">
                    <div className="title-earning">Earnings</div>
                    <div className="earning-detail-container">
                        <EarningList title={'Direct referral Bonus'} cost={'99,000'} />
                        <EarningList title={'Direct Referral Extra Bonus'} cost={'315,000'} />
                        <EarningList title={'3 level rebate commissions'} cost={'105.01M'} />
                        <EarningList title={'TOTAL TEAM EARNINGS'} cost={'109.8M'} />
                    </div>
                </div>
                <div className="friends-list">Friends List</div>
                <div className="friends-list">Direct Referral Extra Bonus</div>
                <div className="earning-learn">
                    <div className="learn">LEARN MORE ABOUT OUR REFERRAL PROGRAM</div>
                    <div className="go-logo"></div>
                </div>
                
            </div>
            <BottomBar />
        </>
        
    )
}

export default Team; 