import React, { useState  } from 'react';
import InputComponent from '../../Components/verify/InputComponent';
import Button from '../../Components/verify/Button';

const ForgetPassword = () => {   
    const [gmail, setGmail] = useState('');
    const handleGmailChange = (e) => setGmail(e.target.value);

    return (
        <div className="auth-container">
            <div className="forgetpassword-container">
                <div className='previous'></div>          
                <div className='forget-password'><label>Forget Password</label></div>
                <div className='forget-description'><label>Please enter your gmail account to receive your verification code</label></div>
                <div className="form-group">
                    <label className="gmailaccount">Gmail Account  *</label>
                    {/* <input type="text" id="gmail" name="gmail" placeholder='Enter your email' required/> */}
                    <InputComponent value={gmail} type="text" id="gmail" name="gmail" placeholder='Enter your email'  onChange={handleGmailChange} required/>
                </div>
                {/* <button className='sendresetcode' type="submit">Send reset code</button> */}
                <Button className='sendresetcode' type="submit">Send reset code</Button>
                <label className="gotologin">Already have an account? &nbsp;<span > Login</span></label>
            </div>
        </div>

    );
};

export default ForgetPassword;