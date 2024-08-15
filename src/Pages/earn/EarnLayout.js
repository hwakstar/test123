import React, { } from 'react';
import BottomBar from '../../Components/Bottombar';
import BackwardButton from "../../Components/BackwardButton";
import { Link, useNavigate } from 'react-router-dom';

const EarnLayout = () => {
    return (
        <>
            <div className="earn-layout">
                <div className='toppart'>
                    <Link to="/launcher">
                        <BackwardButton />
                    </Link>
                    <span className="profile-text">Bittoken</span>
                </div>
            </div>
            <BottomBar />
        </>

    );
};

export default EarnLayout;