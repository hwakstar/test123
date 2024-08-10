import React, { } from "react";

const Input = ({label, Icon, placeholder}) => {   
    console.log(Icon);
    let IconClass = 'span-pic-' + Icon ;
    return (
        <div className="pt-3">
            <label className="input-label" htmlFor="price">
                {label}
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className={`text-gray-500 sm:text-sm ${IconClass}`}></span>
                </div>
                <input                
                    id="price"
                    name="price"
                    type="text"
                    placeholder={placeholder}
                    className="input-field block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-white-900 ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />       
            </div>
        </div>
    );
};





export default Input;