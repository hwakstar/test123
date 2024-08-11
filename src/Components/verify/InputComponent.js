import React from 'react';

const InputComponent = ({value, onChange, placeholder, type = 'text', style = {}, ...props }) => {
    const defaultStyle = {
        width: '100%',
        height: '40px',
        marginTop:'0.5em',
        padding: '0.75rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: 'transparent'
    };

    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{ ...defaultStyle, ...style }}
            {...props}
        />
    );
};

export default InputComponent;