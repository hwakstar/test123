import React, {  } from "react";

const Input = ({htmlFor, Icon, placeholder, name,value,type,onChange}) => {   

    let IconClass = 'span-pic-' + Icon ;
    return (
        <div className="pt-3">
            <label className="input-label" htmlFor={name}>
                {htmlFor}
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className={`text-gray-500 sm:text-sm ${IconClass}`}></span>
                </div>
                <input                
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    className="input-field block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-white-900  placeholder:text-white-400   sm:text-sm sm:leading-6"
                    onChange={onChange}
                   
               />       
            </div>
        </div>
    );
};

export default Input;