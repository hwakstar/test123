import React, { useState } from "react";
import BackwardButton from "../../Components/BackwardButton";
import Input from "../../Components/Input";
import GlobalButton from "../../Components/GlobalButton";
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to install axios if you haven't already

const Login = () => {   
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    try {
      // Send login request to the backend
      const response = await axios.post("http://localhost:5000/login", formData);
      console.log(response)
      console.log("Login successful", response.data);

      // Handle successful login (e.g., save token, redirect)
      // For example, you might want to store a token in local storage:
      localStorage.setItem('token', response.data.token); // Adjust according to your API response

      // Navigate to a different page after successful login
      navigate("/profile"); // Change this to your desired route
    } catch (error) {
      console.error('Error:', error);
      setError('Invalid username or password.'); // Set error message
    }
  };

  return (         
    <div className="container-auth">    
      <Link to="/launcher">
        <BackwardButton  />    
      </Link>
      <div className="container-login">
        <div className="text-title">Log In</div>
        <div className="container-login-input">
           <form onSubmit={handleSubmit}>
              <Input htmlFor={'Name'} Icon={'user'} placeholder={'Enter your name'} name={'name'}  onChange={handleChange} />
              <Input htmlFor={'Password'} Icon={'eye'} placeholder={'Enter your Password'} name={'password'}  onChange={handleChange} />
              <div className="check-login pt-5">
                <div className="check-part">
                  <input className="check-input" type="checkbox" id="remember" name="remember" defaultValue=""/>
                  <label className="check-label" htmlFor="remember"> Remember me</label>
                </div>       
                <Link to="/forgetpassword" className="forgot-part">
                  Forgot Password?
                </Link>           
              </div>                
              <GlobalButton Class={'login-button'} BtnName={'Login'} />      
              <Link to="/signup" className="creat-account">
                Don't have an account?                   
                <span className="auth-span">Sign Up</span>
              </Link> 
            </form>         
        </div>         
      </div>             
    </div>
  );
  
};

export default Login;

