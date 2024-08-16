import React, { } from 'react';
import EarnTopbar from '../../Components/earn/tags/EarnTopbar';
import EarnTag1 from '../../Components/earn/tags/EarnTag1';
import EarnTag2 from '../../Components/earn/tags/EarnTag2';
import EarnTag3 from '../../Components/earn/tags/EarnTag3';

import '../../assets/css/earn.css'
import BottomBar from '../../Components/Bottombar';

const Earn = () => {

    return (
        <>
            <div className='container-earn'>
                <EarnTopbar />
            </div>
            <BottomBar/>
        </>
    );
};

export default Earn;