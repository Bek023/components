import React from 'react';
import type { ButtonProps } from './ButtonContainerProps';
import Buttons from "./TextButton/TextButton"
import IconButton from './IconButton/IconButton';
const Inputs: React.FC<ButtonProps> = (props) => {
    const { type } = props;

    switch (type) {
        case 'TButton':
            return <Buttons {...props} />;
        case 'IButton':
            return <IconButton {...props} />
        default:
            console.warn("plase select correct type of input !")
            return <h1>Plase select correct type of input !</h1>;
    }
};

export default Inputs;
