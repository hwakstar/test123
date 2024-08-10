import React, { } from "react";
import BackwardButton from "../../Components/BackwardButton";
import Input from "../../Components/Input";

const Login = () => {   

    return (     
      
        
        <div className="container-auth">    
          <BackwardButton />    
          <div className="container-login">
            <div className="text-title">Log In</div>
            <div className="container-login-input">
                <Input label={'Name'} Icon={'user'} placeholder={'Enter your name'} />
                <Input label={'Password'} Icon={'eye'} placeholder={'Enter your Password'} />
                <div className="check-login pt-3">
                  <div>
                    <input className="check-input" type="checkbox" id="remember" name="remember" value=""/>
                    <label className="check-label" for="remember"> Remember me</label>
                  </div>       
                  <div>

                  </div>           
                </div>
            </div>         
          </div>             
        </div>
    );
};

export default Login;

