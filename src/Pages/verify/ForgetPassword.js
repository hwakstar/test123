import React, {  } from 'react';

const ForgetPassword = () => {   

    return (
        <div className="auth-container">
            <div className="forgetpassword-container">
                {/* <div className='previous'></div>           */}
                <div className='forget-password'><label>Forget Password</label></div>
                <div className='forget-description'><label>Please enter your gmail account to receive your verification code</label></div>
                <div className="form-group">
                    <label className="gmailaccount">Gmail Account  *</label>
                    <input type="text" id="gmail" name="gmail" placeholder='Enter your email' required/>
                </div>
                <button className='sendresetcode' type="submit">Send reset code</button>
                <label className="gotologin">Already have an account?<span > Login</span></label>
            </div>
        </div>

    );
};

export default ForgetPassword;