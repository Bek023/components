import React from 'react';
import type { InputsProps } from './InputsProps';
import InputText from './text/Text';

const Inputs: React.FC<InputsProps> = (props) => {
    const { type } = props;

    switch (type) {
        case 'text':
            return <InputText {...props} />;

        default:
            console.warn("plase select correct type of input !")
            return <h1>Plase select correct type of input !</h1>;
    }
};

export default Inputs;
