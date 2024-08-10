import React, {  } from 'react';

const ForgetPassword = () => {   

    return (
        <div className="auth-container">
            <div className="forgetpassword-container">          
                <div className='forget-password'><label>Forget Password</label></div>
                <div className='forget-description'><label>Please enter your gmail account to receive your verification code</label></div>
                <div className="form-group">
                    <label className="gmailaccount">Gmail Account  *</label>
                    <input type="text" id="gmail" name="gmail" placeholder='Enter your email' required/>
                </div>
                <button type="submit">Send reset code</button>
            </div>
        </div>

    );
};

export default ForgetPassword;