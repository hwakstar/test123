import React, {  } from 'react';

const Verification = () => {   

    return (
        <div className="auth-container">
            <div className="verification-container">
                <div className='previous'></div>          
                <div className='verification'><label>Verification</label></div>
                <div className='verification-description'><label>We’ve sent your verification code, check your gmail inbox or spam folder</label></div>
                <div className="figure-group">
                    <div className='code'>7</div>
                    <div className='code'>3</div>
                    <div className='code'>9</div>
                    <div className='code'>6</div>
                    <label className="gotologin">Don;t you receive the code?<span > Resend code</span></label>
                </div>
                <button className='continue-btn' type="submit">Continue</button>
            </div>
        </div>

    );
};

export default Verification;