import React from 'react';
import type { InputsProps } from './InputsProps';

const Inputs: React.FC<InputsProps> = ({ label, placeholder, value, disabled, onChange, type }) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input
                id={label}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    )
}
export default Inputs;