import React, { } from "react";
import BackwardButton from "../../Components/BackwardButton";
import Input from "../../Components/Input";
import GlobalButton from "../../Components/GlobalButton";
import { Link } from 'react-router-dom';

const SignUp = () => {   

  return (         
    <div className="container-auth">   
      <BackwardButton linkUrl={'/login'} />    
      <div className="container-signup">
        <div className="text-title">Create Account</div>
        <div className="container-signup-input">
            <Input label={'Name'} Icon={'user'} placeholder={'Enter your name'} />
            <Input label={'Mobile Number'} Icon={'calloutgoing'} placeholder={'Enter your Mobile number'} />
            <Input label={'Gmail Account'} Icon={'directory'} placeholder={'Enter your email'} />
            <Input label={'Country'} Icon={'directory'} placeholder={'Select country'} />
            <Input label={'Password'} Icon={'eye'} placeholder={'Enter your Password'} />
            <Input label={'Repeat Password'} Icon={'eye'} placeholder={'Enter your Password'} />
            <Input label={'Referral Code *'} Icon={'Vector'} placeholder={'Enter your Sponsor Code'} />                           
            <GlobalButton Class={'signup-button'} BtnName={'Sign Up'} />      
            <Link to="/login" className="already-account">
              Already have an account?                   
              <span className="auth-span">Log In</span>
            </Link>          
        </div>         
      </div>             
    </div>
  );
  
};

export default SignUp; 