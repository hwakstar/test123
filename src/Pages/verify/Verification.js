import React, { useState, useRef  } from 'react';
import Button from '../../Components/verify/Button';
import InputComponent from '../../Components/verify/InputComponent';

const Verification = () => {   
    const [inputValues, setInputValues] = useState(['', '', '', '']); // Array to hold input values
    const inputRefs = useRef([]); // Array to hold refs for input elements

    const handleInputChange = (index, event) => {
        const newValues = [...inputValues];
        newValues[index] = event.target.value;

        setInputValues(newValues);

        // Move to the next input if the current input has one character
        if (event.target.value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus(); // Focus on the next input
        }
        // Check if all inputs are filled
        if (newValues.every(value => value.length === 1)) {
            // Join all values into a single string
            const code = newValues.join('');
            console.log('Collected Code:', code);
            // Here you can send the code to your database
            // sendToDatabase(code); // Uncomment and implement this function as needed
        }
    };
    const handleKeyDown = (index, event) => {
        // Check if the backspace key is pressed
        if (event.key === 'Backspace' && inputValues[index] === '') {
            // Focus on the previous input if the current one is empty
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };
    return (
        <div className="auth-container">
            <div className="verification-container">
                <div className='previous'></div>          
                <div className='verification'><label>Verification</label></div>
                <div className='verification-description'><label>We’ve sent your verification code, check your gmail inbox or spam folder</label></div>
                <div className="figure-group">
                {inputValues.map((value, index) => (
                <div className='element' key={index}>
                    <InputComponent
                        ref={el => inputRefs.current[index] = el} // Assign ref to each input
                        value={value}
                        onChange={(event) => handleInputChange(index, event)}
                        onKeyDown={(event) => handleKeyDown(index, event)} // Handle key down event
                        style={{ backgroundColor: '#283e5d', borderRadius: '5px', border: 'none', height: '56px', textAlign: 'center' }}
                    />
                </div>
            ))}
                </div>
                <label className="resendcode">Don't you receive the code? &nbsp;<span > Resend code</span></label>
                <Button className='continue-btn' type="submit">Continue</Button>
            </div>
        </div>

    );
};

export default Verification;