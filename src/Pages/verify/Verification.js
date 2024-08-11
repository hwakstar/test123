import React, {  } from 'react';
import Button from '../../Components/verify/Button';

const Verification = () => {   

    return (
        <div className="auth-container">
            <div className="verification-container">
                <div className='previous'></div>          
                <div className='verification'><label>Verification</label></div>
                <div className='verification-description'><label>We’ve sent your verification code, check your gmail inbox or spam folder</label></div>
                <div className="figure-group">
                    <div className='element'><span>7</span></div>
                    <div className='element'><span>9</span></div>
                    <div className='element'><span>3</span></div>
                    <div className='element'><span>2</span></div>
                </div>
                <label className="resendcode">Don't you receive the code? &nbsp;<span > Resend code</span></label>
                <Button className='continue-btn' type="submit">Continue</Button>
            </div>
        </div>

    );
};

export default Verification;