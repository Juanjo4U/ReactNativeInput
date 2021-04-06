import React, { useEffect, useState, useRef, forwardRef, Ref } from 'react';
import { TextInput } from "react-native";
import MyInput from "./defaultInput";
import { ComponentWithForwardRefType, InputPropsTypes } from '../types';
import { validateInput } from "../utils/validations";

const InputComponent = ({
    component: Component = MyInput,
    name, label, placeholder, initialValue = '', controledValue,
    onChangeText = () => { }, onSubmitEditing = () => { },
    validations = {},
    ...props
}: InputPropsTypes, ref: Ref<TextInput>) => {
    const input = ref || useRef();
    const [value, setValue] = useState<any>();
    const [isValid, setValid] = useState<boolean>();
    const [isSecure, setSecure] = useState(validations.type === 'password');
    const isValidationRequired = !!Object.keys(validations).length;

    const toggleSecurity = () => setSecure(!isSecure);

    const formatValue = (value: any): any => name ? ({ name, value }) : value;

    const handleChange = (txt: any): any => {
        setValue(txt + '');
        if (isValidationRequired) {
            let valid = validateInput(txt, validations);
            setValid(valid);
            if (valid) {
                if (!isNaN(txt) && !!txt) txt = Number(txt);
            } else txt = undefined;
        }
        onChangeText(formatValue(txt));
    }

    useEffect(() => {
        if (validations.isValidating) {
            handleChange(value || initialValue);
        }
    }, [validations.isValidating])

    useEffect(() => {
        if (controledValue !== undefined) handleChange(controledValue);
    }, [controledValue])

    return (
        <Component ref={input} {...props}
            label={label}
            placeholder={placeholder}
            onChangeText={handleChange}
            toggleSecurity={toggleSecurity}
            defaultValue={initialValue && initialValue + ''}
            value={value}
            isValid={isValid}
            isSecure={isSecure}
        />
    )
}

export const Input: ComponentWithForwardRefType = forwardRef(InputComponent);