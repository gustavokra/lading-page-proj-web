import React from 'react';
import "./input.css"

interface IInputProps {
    type?: string;
    value?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({type = 'text', value, placeholder, onChange}: IInputProps) {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="inpt"
        />
    );
}
