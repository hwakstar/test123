import React, {  } from 'react';
import Button from '../../Components/verify/Button';
const Congratulation = () => {   

    return (
        <div className="auth-container">
            <div className="congratulation-container">
                <div className='previous'></div>          
                <div className='check-image'></div>          
                <div className='congratulation-image'><label>Congratuation</label></div>
                <div className='congratulation-description'><label>Your password has been successfully changed</label></div>
                <Button className='resetpassworddone' type="submit">Done</Button>
            </div>
        </div>

    );
};

export default Congratulation;