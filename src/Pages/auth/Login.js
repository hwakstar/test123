import React, { } from "react";
import BackwardButton from "../../Components/BackwardButton";
import Input from "../../Components/Input";
import GlobalButton from "../../Components/GlobalButton";
import { Link } from 'react-router-dom';

const Login = () => {   

  return (         
    <div className="container-auth">    
      <BackwardButton linkUrl={'/launcher'} />    
      <div className="container-login">
        <div className="text-title">Log In</div>
        <div className="container-login-input">
            <Input label={'Name'} Icon={'user'} placeholder={'Enter your name'} />
            <Input label={'Password'} Icon={'eye'} placeholder={'Enter your Password'} />
            <div className="check-login pt-5">
              <div className="check-part">
                <input className="check-input" type="checkbox" id="remember" name="remember" value=""/>
                <label className="check-label" for="remember"> Remember me</label>
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
        </div>         
      </div>             
    </div>
  );
  
};

export default Login;

