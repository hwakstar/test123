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
            <form>
                <Input label={'Name'} Icon={'user'} placeholder={'Enter your name'} name={'name'} />
                <Input label={'Mobile Number'} Icon={'calloutgoing'} placeholder={'Enter your Mobile number'} name={'phone_number'} />
                <Input label={'Gmail Account'} Icon={'directory'} placeholder={'Enter your email'} name={'email'} />
                <Input label={'Country'} Icon={'directory'} placeholder={'Select country'} name={'country'} />
                <Input label={'Password'} Icon={'eye'} placeholder={'Enter your Password'} name={'password'} />
                <Input label={'Repeat Password'} Icon={'eye'} placeholder={'Enter your Password'} name={'re_password'} />
                <Input label={'Referral Code *'} Icon={'Vector'} placeholder={'Enter your Sponsor Code'} name={'code'} />                           
                <GlobalButton Class={'signup-button'} BtnName={'Sign Up'} /> 
                <Link to="/login" className="already-account">
                Already have an account?                   
                <span className="auth-span">Log In</span>
                </Link>  
            </form>        
        </div>         
      </div>             
    </div>
  );
  
};

export default SignUp; 