import React, {  } from 'react';
import InputComponent from '../../Components/verify/InputComponent';
import Button from '../../Components/verify/Button';

const ResetPassword = () => {   

    return (
        <div className="auth-container">
            <div className="resetpassword-container">
                <div className='previous'></div>          
                <div className='reset-password'><label>Reset Password</label></div>
                <div className='resetpassword-description'><label>Please enter your new password to continue</label></div>
                <div className="form-group-reset">
                    <label className="passwordLabel">Password  *</label>
                    <InputComponent type="text" id="password" name="password" placeholder='' required/>
                    <label className="confirmpasswordLabel">Confirm Password  *</label>
                    <InputComponent type="text" id="confirmpassword" name="confirmpassword" placeholder='' required/>
                </div>
                <Button className='resetpassowrd' type="submit">Send reset code</Button>
            </div>
        </div>

    );
};

export default ResetPassword;