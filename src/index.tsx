import React, { useEffect, useState, useRef, forwardRef, ComponentType, Ref } from 'react';
import { TextInput } from "react-native";
import MyInput from "./components";
import { InputPropsTypes } from './types';
import { validateInput } from "./utils/validations";

const InputComponent = ({
    name, label, placeholder, initialValue = '', controledValue,
    onChangeText, onSubmitEditing,
    validations,
    ...props
}: InputPropsTypes, ref: Ref<TextInput>) => {
    const input = ref || useRef();
    const [value, setValue] = useState<any>();
    const [isValid, setValid] = useState<boolean>();
    const [secure, setSecure] = useState(false);
    const isValidationRequired = !!Object.keys(validations).length;

    const toggleSecurity = () => setSecure(!secure);

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
        <MyInput ref={input} {...props}
            label={label}
            placeholder={placeholder}
            onChangeText={handleChange}
            defaultValue={initialValue && initialValue + ''}
            value={value}
            isValid={isValid}
        />
    )
}

export const Input: ComponentType<InputPropsTypes> = forwardRef(InputComponent);