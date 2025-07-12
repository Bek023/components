import { useState } from "react";
import type { InputsProps } from "../InputsProps";
import styl from './Text.module.css';

const InputText: React.FC<InputsProps> = (props) => {
    const {
        label,
        placeholder,
        value,
        disabled,
        onChange,
        className,
        labelClassName,
        style,
        autoFocus,
        required,
        maxLength,
        minLength,


    } = props;
    const inputClassName = `${styl.input} ${className || ''}`.trim();
    const labelClassNameFinal = `${styl.label} ${labelClassName || ''}`.trim();
    const [initialValue, setInitialValue] = useState(value);
    return (
        <div style={{ margin: '0 auto', marginTop: '30%', maxWidth: 'max-content' }} className={labelClassNameFinal}>
            {label && (
                <label htmlFor={label} >
                    {label}
                </label>
            )}
            <input
                type="text"
                id={label}
                placeholder={placeholder}
                disabled={disabled}
                onChange={(e) => {
                    setInitialValue(e.target.value);
                    onChange?.(e);
                }}
                className={inputClassName}
                style={style}
                value={initialValue ?? ''}
                maxLength={maxLength}
                minLength={minLength}
                required={required}
                autoFocus={autoFocus}

            />
        </div>
    );
};

export default InputText;
