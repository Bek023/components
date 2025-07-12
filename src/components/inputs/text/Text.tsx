import type { InputsProps } from "../InputsProps";
import styl from './Text.module.css';

const InputText: React.FC<InputsProps> = ({
    label,
    placeholder,
    value,
    disabled,
    onChange,
    className,
    labelClassName,
    style,
}) => {
    const inputClassName = `${styl.input} ${className || ''}`.trim();
    const labelClassNameFinal = `${styl.label} ${labelClassName || ''}`.trim();

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
                value={value}
                disabled={disabled}
                onChange={onChange}
                className={inputClassName}
                style={style}
            />
        </div>
    );
};

export default InputText;
