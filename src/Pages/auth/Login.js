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
            </div>
          </div>  
           
        </div>
    );
};

export default Login;

