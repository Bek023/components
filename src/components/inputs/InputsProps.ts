import type { ChangeEvent, HTMLInputTypeAttribute, CSSProperties } from 'react';

export type InputsProps = {
    props?: object;
    label?: string;
    type?: HTMLInputTypeAttribute | string;
    name?: string;
    id?: string;
    value?: string | number | readonly string[] | undefined;
    placeholder?: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    labelClassName?: string;
    autoFocus?: boolean;
    required?: boolean;
    accept?: string;
    multiple?: boolean;
    readOnly?: boolean;
    maxLength?: number;
    minLength?: number;
    min?: number | string;
    max?: number | string;
    step?: number;
    style?: CSSProperties;
    initialValue?: string | number;
};
