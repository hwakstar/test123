import React, {  } from 'react';
import BottomBar from '../../Components/Bottombar';
import TopBar from "../../Components/TopBar";
import WalletButton from '../../Components/wallet/WalletButton';
import BalanceList from '../../Components/wallet/BalanceList';
import { Link, } from 'react-router-dom';
// import axios from 'axios'; // Make sure to install axios if you haven't already
import '../../assets/css/wallet.css'

const Wallet = () => {   
    return (
        <>
            <div className="container-wallet">    
                <TopBar />
                <div className='container-inventory mx-auto'>
                    <div className='inventory-title'>
                        <p>My WALLET</p>
                        <p>Current RT Ballance</p>
                    </div>
                    <div className='inventory-quentity'>
                        <div className='col-8'>
                            <div className='coin'></div>
                            <p>32,000,000</p>
                        </div>
                        <div className='col-4'>
                            <p>Register Data</p>
                            <p>31/7/24</p>
                        </div>
                    </div>
                </div>
                <div className='button-group mx-auto'>  
                    <Link to="#">
                     <WalletButton title={'Airdrop'} claname={'airdrop'} />  
                    </Link>   
                    <Link to="#">
                        <WalletButton title={'Stake'} claname={'stake'} /> 
                    </Link>   
                    <Link to="#">
                         <WalletButton title={'Withdraw'} claname={'withdraw'} /> 
                    </Link>   
                    <Link to="/wallet/history">
                        <WalletButton title={'History'} claname={'history'} />  
                    </Link>                            
                </div>
                <div className='assets-balance'>
                    <div>Assets Balance</div>
                    <div className='classification '>
                       <BalanceList title={'Bittoken(BTT)'} cost={'12300'} icon ={'btt'} subtitle={''} /> 
                       <BalanceList title={'Reward token(RT)'} cost={'32,000,000'} icon ={'coin'} subtitle={'Available for swap'} />
                       <BalanceList title={'Travel incentive point (TP)'} cost={'300.00'} icon ={'fly'} subtitle={''} />
                       <BalanceList title={'Overall Reword token(RT)'} cost={'300.00'} icon ={'coin'} subtitle={'since Registration'} />                      
                    </div>
                </div>

            </div>
            <BottomBar/>  
        </>
    );
};

export default Wallet;