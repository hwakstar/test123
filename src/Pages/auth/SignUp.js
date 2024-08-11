import React, { } from "react";
import BackwardButton from "../../Components/BackwardButton";
import Input from "../../Components/Input";
import GlobalButton from "../../Components/GlobalButton";
import { Link } from 'react-router-dom';

const SignUp = () => {   

  return (         
    <div className="container-auth">  
        <Link to="/login">
            <BackwardButton /> 
        </Link>          
        <div className="container-signup">
            <div className="text-title">Create Account</div>
            <div className="container-signup-input">
                <form>
                    <Input label={'Name'} Icon={'user'} placeholder={'Enter your name'} name={'name'} />
                    <Input label={'Mobile Number'} Icon={'calloutgoing'} placeholder={'Enter your Mobile number'} name={'phone_number'} />
                    <Input label={'Gmail Account'} Icon={'directory'} placeholder={'Enter your email'} name={'email'} />
                    <div className="pt-3">
                        <label className="input-label" htmlFor="country">
                            Country
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className={`text-gray-500 sm:text-sm span-pic-country`}></span>
                            </div>
                            <select                
                                id="country"
                                name="country"
                                type="text"
                                value="Select Country"
                                className="input-field block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-white-900 ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            > 
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>      
                        </div>
                    </div>
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