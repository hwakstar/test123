import React, {  } from 'react';
import BottomBar from '../../Components/Bottombar';
import TopBar from "../../Components/TopBar";
import HistoryList from '../../Components/wallet/HistoryList';
import WalletButton from '../../Components/wallet/WalletButton';
import BalanceList from '../../Components/wallet/BalanceList';
import { Link, } from 'react-router-dom';
import axios from 'axios'; // Make sure to install axios if you haven't already
import '../../assets/css/wallet.css'

const History = () => {   
    return (
        <>  
            <div className='container-wallet-history'>
                <TopBar title={'History'} />
                <div className='historylist'>
                    <HistoryList 
                        picname={'bonus'} 
                        title={'Direct Referral bonus'} 
                        gmail={'user@gmail.com'} 
                        cost1={'+1,000.00'} 
                        cost2={''} 
                        kind1={'RT'} 
                        kind2={''} 
                        date={''}
                    />
                    <HistoryList 
                        picname={'extrabonus'} 
                        title={'Direct Referral extra bonus'} 
                        gmail={'user@gmail.com'} 
                        cost1={'+5,000.00'} 
                        cost2={''} 
                        kind1={'RT'} 
                        kind2={''} 
                        date={''}
                    />
                    <HistoryList 
                        picname={'commission'} 
                        title={'Level-1 referral commission'} 
                        gmail={'user@gmail.com'} 
                        cost1={'+1,000.00'} 
                        cost2={''} 
                        kind1={'RT'} 
                        kind2={''} 
                        date={''}
                    />
                    <HistoryList 
                        picname={'commission'} 
                        title={'Level-2 referral commission'} 
                        gmail={'user@gmail.com'} 
                        cost1={'+5,000.00'} 
                        cost2={''} 
                        kind1={'RT'} 
                        kind2={''} 
                        date={''}
                    />
                    <HistoryList 
                        picname={'commission'} 
                        title={'Level-3 referral commission'} 
                        gmail={'user@gmail.com'} 
                        cost1={'+300.00'} 
                        cost2={''} 
                        kind1={'RT'} 
                        kind2={''} 
                        date={''}
                    />
                    <HistoryList 
                        picname={'miningrewards'} 
                        title={'Mining rewards'} 
                        gmail={''} 
                        cost1={'+300.00'} 
                        cost2={''} 
                        kind1={'RT'} 
                        kind2={''} 
                        date={''}
                    />
                    <HistoryList 
                        picname={'rankrewards'} 
                        title={'Rank Achievement rewards'} 
                        gmail={''} 
                        cost1={'+1.00M'} 
                        cost2={'+5.00'} 
                        kind1={'RT'} 
                        kind2={'TP'} 
                        date={''}
                    />
                    <HistoryList 
                        picname={'taskrewards'} 
                        title={'Task rewards'} 
                        gmail={''} 
                        cost1={'+1,000.00'} 
                        cost2={''} 
                        kind1={'RT'} 
                        kind2={''} 
                        date={''}
                    />
                    <HistoryList 
                        picname={'swap'} 
                        title={'RT to BTT swap'} 
                        gmail={''} 
                        cost1={'-1,000.00'} 
                        cost2={''} 
                        kind1={'RT'} 
                        kind2={''} 
                        date={''}
                    />
                    <HistoryList 
                        picname={'swap'} 
                        title={'RT to BTT swap'} 
                        gmail={''} 
                        cost1={'+1,000.00'} 
                        cost2={''} 
                        kind1={'RT'} 
                        kind2={''} 
                        date={''}
                    />
                    <HistoryList 
                        picname={'stake'} 
                        title={'BTT staking'} 
                        gmail={''} 
                        cost1={'-1,000.00'} 
                        cost2={''} 
                        kind1={'RT'} 
                        kind2={''} 
                        date={''}
                    />
                    <HistoryList 
                        picname={'withdrawal'} 
                        title={'BTT withdrawal'} 
                        gmail={''} 
                        cost1={'-1,000.00'} 
                        cost2={''} 
                        kind1={'RT'} 
                        kind2={''} 
                        date={''}
                    />
                    <HistoryList 
                        picname={'claim'} 
                        title={'Claim - Travel point'} 
                        gmail={''} 
                        cost1={'-100.00'} 
                        cost2={''} 
                        kind1={'RT'} 
                        kind2={''} 
                        date={''}
                    />

                </div>
            </div>
        </>
    );
};

export default History;