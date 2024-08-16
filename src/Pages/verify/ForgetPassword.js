import React, { useState  } from 'react';
import InputComponent from '../../Components/verify/InputComponent';
import Button from '../../Components/verify/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ForgetPassword = () => {   
    const [gmail, setGmail] = useState('');
    const handleGmailChange = (e) => setGmail(e.target.value);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();      
        console.log(gmail)    
        const formData = {
            gmail: gmail // Replace with the actual email input from the user
        };
        try {
            const response = await axios.post('http://localhost:5000/forgetpassword', formData);
            console.log('Response:', response.data);
            if (response.status === 200) {
                navigate("/verify"); // Navigate to the verification code screen
            }
            // Handle success (e.g., show a success message)
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show an error message)
        }

    }    
    return (
        <div className="auth-container">
            <div className="forgetpassword-container">
                <div className='previous'></div>          
                <div className='forget-password'><label>Forget Password</label></div>
                <div className='forget-description'><label>Please enter your gmail account to receive your verification code</label></div>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="gmailaccount">Gmail Account  *</label>
                    {/* <input type="text" id="gmail" name="gmail" placeholder='Enter your email' required/> */}
                    <InputComponent value={gmail} type="text" id="gmail" name="gmail" placeholder='Enter your email'  onChange={handleGmailChange} required/>
                </div>
                {/* <button className='sendresetcode' type="submit">Send reset code</button> */}
                <Button className='sendresetcode' type="submit">Send reset code</Button>
                </form>
                <label className="gotologin">Already have an account? &nbsp;<span > Login</span></label>
            </div>
        </div>

    );
};

export default ForgetPassword;